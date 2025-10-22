document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.map');

  const io = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      section.classList.add('in-view');
      io.unobserve(section);
    }
  }, {
    root: null,
    threshold: 0.35,
    rootMargin: '0px 0px -10% 0px'
  });

  io.observe(section);
});

gsap.registerPlugin(MotionPathPlugin);

// 1) Общие настройки старта/повтора
const SHARED_START_DELAY = "13";  // сделай 0, если нужно стартовать сразу
const REPEAT_DELAY = 2;

// 2) Фабрика одного бесконечного зацикленного таймлайна
function makeTruck({ target, path, move = 2, autoRotate = 180, inDur = 0.2, settle = 0.2, outDur = 0.2 }) {
  // начальные состояния
  gsap.set(target, { x: 0, y: 0, rotation: 0, scale: 1, opacity: 0, transformOrigin: "50% 50%" });

  const tl = gsap.timeline({
    paused: true,
    repeat: -1,
    repeatDelay: REPEAT_DELAY,
    defaults: { ease: "power1.inOut" }
  });

  return tl
    .to(target, { opacity: 1, scale: 1.1, duration: inDur })
    .to(target, { scale: 1, duration: settle })
    .to(target, {
      duration: move,
      motionPath: {
        path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate // 180 если иконка смотрит влево; true — если вправо
      }
    }, "<")
    .to(target, { opacity: 0, scale: 0.5, duration: outDur }, ">");
}

// 3) Создаём таймлайны
const timelines = [
  makeTruck({ target: "#truck1", path: "#route-tacheng-belarus", move: 4, autoRotate: 180 }),
  makeTruck({ target: "#truck2", path: "#route-dulati-russia",   move: 2, autoRotate: 180 }),
  makeTruck({ target: "#truck3", path: "#route-uz-tajikistan",   move: 1, autoRotate: true }),
];

// 4) Стартуем все РАЗОМ, когда .map получает .in-view
(function startOnInView() {
  const mapEl = document.querySelector(".map");
  if (!mapEl) return;

  const playAll = () => timelines.forEach(tl => tl.play(0));
  const playAllWithDelay = () => gsap.delayedCall(SHARED_START_DELAY, playAll);

  // A) если класс уже есть
  if (mapEl.classList.contains("in-view")) {
    playAllWithDelay();
    return;
  }

  // B) ждём появления класса
  const mo = new MutationObserver(() => {
    if (mapEl.classList.contains("in-view")) {
      playAllWithDelay();
      mo.disconnect();
    }
  });
  mo.observe(mapEl, { attributes: true, attributeFilter: ["class"] });
})();