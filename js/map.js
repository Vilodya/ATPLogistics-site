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

  // Фабрика таймлайна для одного грузовика
  function makeTruckTimeline({
    target,            // '#truck1'
    path,              // '#route-...'
    moveDuration = 2,  // << индивидуальная длительность езды
    delayStartSec = 7,
    repeatDelaySec = 2,
    autoRotate = 180,  // 180 если иконка смотрит влево; true — если вправо
    inDur = 0.2,
    settleDur = 0.2,
    outDur = 0.2
  }) {
    // убьём старые твины/атрибуты, чтобы не тянули синхронно
    gsap.killTweensOf(target);
    gsap.set(target, {
      x: 0, y: 0, rotation: 0, scale: 1,
      transformOrigin: "50% 50%",
      attr: { transform: null }
    });

    const tl = gsap.timeline({
      paused: true,
      repeat: -1,
      repeatDelay: repeatDelaySec,
      defaults: { ease: "power1.inOut" }
    })
    .set(target, { opacity: 0, scale: 0.5, transformOrigin: "50% 50%" })
    .to(target, { opacity: 1, scale: 1.1, duration: inDur })
    .to(target, { scale: 1, duration: settleDur })
    .to(target, {
      duration: moveDuration,
      motionPath: {
        path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: autoRotate
      }
    }, "<")
    .to(target, { opacity: 0, scale: 0.5, duration: outDur }, ">");

    return {
      playWithDelay() { gsap.delayedCall(delayStartSec, () => tl.play(0)); }
    };
  }

  // 3) Создаём таймлайны для нужных грузовиков (пока не запускаем)
  const truck1 = makeTruckTimeline({
    target: "#truck1",
    path: "#route-tacheng-belarus",
    moveDuration: 4,
    delayStartSec: 7,
    repeatDelaySec: 2,
    autoRotate: 180
  });

  const truck2 = makeTruckTimeline({
    target: "#truck2",
    path: "#route-dulati-russia",
    moveDuration: 2,
    delayStartSec: 9,
    repeatDelaySec: 2,
    autoRotate: 180
  });

  const truck3 = makeTruckTimeline({
    target: "#truck3",
    path: "#route-uz-tajikistan",
    moveDuration: 1,
    delayStartSec: 11,
    repeatDelaySec: 2,
    autoRotate: true
  });

  // 4) Старт по появлению .in-view у .map (через отлов изменения class)
  (function startOnInView() {
    const mapEl = document.querySelector(".map");
    if (!mapEl) return;

    let started = false;
    const startAll = () => {
      if (started) return;
      started = true;
      // запуск всех подготовленных таймлайнов с их персональными задержками
      truck1.playWithDelay();
      truck2.playWithDelay();
      truck3.playWithDelay();
    };

    // A) если класс уже есть к моменту загрузки
    if (mapEl.classList.contains("in-view")) {
      startAll();
      return;
    }

    // B) ждём появления класса .in-view
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && mapEl.classList.contains("in-view")) {
          startAll();
          mo.disconnect();
          break;
        }
      }
    });
    mo.observe(mapEl, { attributes: true, attributeFilter: ["class"] });
  })();