/**
 *	ZYAN - Personal Portfolio Templete (HTML)
 *	Author: codeefly
 *	Author URL: http://themeforest.net/user/codeefly
 *	Copyright © ZYAN by codeefly. All Rights Reserved.
 **/

(function ($) {
  "use strict";
  console.clear();

  let device_width = window.innerWidth;
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(
      navigator.userAgent
    )
      ? true
      : false;

  var zyan = {
    /* ZYAN init */
    init() {
      zyan.imgToSvg(),
        zyan.mobileMenu(),
        zyan.counter(),
        zyan.slickSlider(),
        zyan.marquee(),
        zyan.stickySideBar(),
        zyan.textAnimation(),
        zyan.headingAnimation(),
        zyan.progressbar(),
        zyan.parallaxie(),
        zyan.animation(),
        zyan.customMouse(),
        zyan.magnificPopup(),
        zyan.serviceHover(),
        zyan.stickySideBar(),
        zyan.chatbot(),
        zyan.locale();
    },
    /* Svg to image */
    imgToSvg() {
      document.querySelectorAll("img.svg").forEach((el) => {
        const imgID = el.getAttribute("id");
        const imgClass = el.getAttribute("class");
        const imgURL = el.getAttribute("src");
        fetch(imgURL)
          .then((data) => data.text())
          .then((response) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response, "text/html");
            let svg = xmlDoc.querySelector("svg");
            if (typeof imgID !== "undefined") {
              svg.setAttribute("id", imgID);
            }

            if (typeof imgClass !== "undefined") {
              svg.setAttribute("class", imgClass + " replaced-svg");
            }

            svg.removeAttribute("xmlns:a");
            if (el.parentNode) {
              el.parentNode.replaceChild(svg, el);
            }
          });
      });
    },
    /** Mobile Menu */
    mobileMenu() {
      if ($(".main_menu").offset() != undefined) {
        var navoff = $(".main_menu").offset().top;
        $(window).scroll(function () {
          var scrolling = $(this).scrollTop();

          if (scrolling > navoff) {
            $(".main_menu").addClass("menu_fix");
          } else {
            $(".main_menu").removeClass("menu_fix");
          }
        });
      }
      /** Mobile Menu Button */
      $(".menu_2_icon").on("click", function () {
        $(".menu_2_icon").toggleClass("show_icon");
      });
      $(".menu_2_icon").on("click", function () {
        $(".main_menu_2").toggleClass("show_menu");
      });
      $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
      });
    },
    /** counter */
    counter() {
      $(".counter").countUp();
    },
    /** Slick Slider */
    slickSlider() {
      $(".testi_slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    },
    /** marquee */
    marquee() {
      $(".marquee_animi").marquee({
        speed: 100,
        gap: 0,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: true,
        pauseOnHover: true,
        startVisible: true,
      });
    },
    /** Sticky sidebar */
    stickySideBar() {
      $("#sticky_sidebar").stickit({
        top: 100,
      });
    },
    /** Animation */
    animation() {
      /** Fade Left */
      let fade_left = gsap.utils.toArray(".fade_left");
      gsap.set(fade_left, {
        opacity: 0,
        x: -30,
      });

      if (fade_left) {
        if (device_width < 1023) {
          fade_left.forEach((item, i) => {
            gsap.to(item, {
              scrollTrigger: {
                trigger: item,
                start: "top center+=150",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          });
        } else {
          fade_left.forEach((item, i) => {
            const containerID = `#${item.getAttribute("data-trigerId")}`;
            gsap.to(
              `${containerID !== "#null" ? containerID : ""} .fade_left`,
              {
                scrollTrigger: {
                  trigger: containerID !== "#null" ? containerID : ".fade_left",
                  start: "top center+=150",
                  markers: false,
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              }
            );
          });
        }
      }

      /** Fade Right */
      let fade_right = gsap.utils.toArray(".fade_right");
      gsap.set(fade_right, {
        opacity: 0,
        x: +30,
      });

      if (fade_right) {
        if (device_width < 1023) {
          fade_right.forEach((item, i) => {
            gsap.to(item, {
              scrollTrigger: {
                trigger: item,
                start: "top center+=150",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          });
        } else {
          fade_right.forEach((item, i) => {
            const containerID = `#${item.getAttribute("data-trigerId")}`;
            const stagger = item.getAttribute("data-stagger");
            gsap.to(`${containerID} .fade_right`, {
              scrollTrigger: {
                trigger: containerID,
                start: "top center+=150",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: stagger ? stagger : 0.4,
              },
            });
          });
        }
      }

      /** Fade Bottom */
      let fade_bottom = gsap.utils.toArray(".fade_bottom");
      if (device_width < 1023) {
        fade_bottom.forEach((item, i) => {
          gsap.set(item, { opacity: 0, y: 60 });
          let featured2Timeline = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top center+=200",
            },
          });
          featured2Timeline.to(item, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out",
          });
        });
      } else {
        fade_bottom.forEach((item, i) => {
          const containerID = `#${item.getAttribute("data-trigerId")}`;
          const stagger = item.getAttribute("data-stagger");
          const duration = item.getAttribute("data-duration");
          const defaultValue = item.getAttribute("data-default-value");
          console.log(defaultValue);
          gsap.set(
            `${containerID !== "#null" ? containerID : ""} .fade_bottom`,
            {
              opacity: 0,
              y: defaultValue ? defaultValue : 30,
            }
          );
          gsap.to(
            `${containerID !== "#null" ? containerID : ""} .fade_bottom`,
            {
              scrollTrigger: {
                trigger: containerID !== "#null" ? containerID : ".fade_bottom",
                start: "top center+=200",
              },
              opacity: 1,
              y: 0,
              duration: duration ? duration : 2,
              ease: "power4.out",
              stagger: stagger ? stagger : 0.3,
            }
          );
        });
      }
    },
    /** Text animation */
    textAnimation() {
      if (device_width > 767) {
        var hasAnim = $(".text_hover_animaiton");
        if (hasAnim.length !== 0) {
          hasAnim.each(function () {
            var $this = $(this);
            var splitType = "words,chars";
            new SplitText($this, {
              type: splitType,
              wordsClass: "menu-text",
            });
          });
        }
      }
    },
    headingAnimation() {
      var hasAnim = $(".has-animation");
      if (device_width > 767) {
        hasAnim.each(function () {
          var $this = $(this);
          var splitType = "lines, chars";
          var splitto = new SplitText($this, {
            type: splitType,
            linesClass: "anim_line",
            charsClass: "anim_char",
            wordsClass: "anim_word",
          });
          var lines = $this.find(".anim_line"),
            words = $this.find(".anim_word"),
            chars = $this.find(".anim_char");
          gsap.fromTo(
            chars,
            { y: "100%" },
            {
              y: "0%",
              duration: 0.8,
              stagger: 0.01,
              ease: "power2.out",
              scrollTrigger: {
                trigger: $(this).parent("div"),
                start: "top center+=300",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    },
    progressbar() {
      var progressbar = $(".tf__team_skills_bar_single .fill");
      progressbar.each(function () {
        const percentage = progressbar.attr("data-percentage");
        gsap.fromTo(
          progressbar,
          { css: { width: 0 } },
          {
            scrollTrigger: {
              trigger: $(this).parent("div"),
              start: "top center+=300",
              toggleActions: "play none none none",
            },
            css: { width: `${percentage}%` },
            duration: 0.8,
            stagger: 0.01,
            ease: "power2.out",
          }
        );
      });
    },
    /** parallaxie */
    parallaxie() {
      $(".tf__subscribe").parallaxie({
        speed: 0.8,
        size: "cover",
      });
    },
    /** Preloader */
    preloader() {
      const svg = document.getElementById("svg");
      const tl = gsap.timeline();
      const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

      tl.to(".preloader-text", {
        delay: 0.5,
        y: -100,
        opacity: 0,
      });
      tl.to(svg, {
        duration: 0.1,
        // attr: { d: curve },
        ease: "power2.easeIn",
      }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
      });
      tl.to(".preloader", {
        y: -1500,
      });
      tl.to(".preloader", {
        zIndex: -1,
        display: "none",
      });
    },
    /** Mouse */
    customMouse() {
      var mouse = { x: 0, y: 0 }; // Cursor position
      var pos = { x: 0, y: 0 }; // Cursor position
      var ratio = 0.15; // delay follow cursor
      var active = false;
      var ball = $("#ball");

      /** default */
      const defaultValue = {
        duration: 0.3,
        opacity: 0.5,
        width: "30px",
        height: "30px",
        backgroundColor: "transparent",
        border: "2px solid #fff",
      };
      const hoverBall = {
        duration: 0.3,
        css: {
          borderWidth: 0,
          opacity: "1!important",
          width: "95px!important",
          height: "95px!important",
          backgroundColor: "#fff",
        },
      };
      gsap.set(ball, {
        // scale from middle and style ball
        xPercent: -50,
        yPercent: -50,
      });
      document.addEventListener("mousemove", mouseMove);
      function mouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
      gsap.ticker.add(updatePosition);
      function updatePosition() {
        if (!active) {
          pos.x += (mouse.x - pos.x) * ratio;
          pos.y += (mouse.y - pos.y) * ratio;

          gsap.set(ball, { x: pos.x, y: pos.y });
        }
      }
      // link
      $("a,.c-pointer,button,.progress")
        .not(".project_slider a") // omit from selection.
        .on("mouseenter", function () {
          gsap.to(ball, {
            duration: 0.3,
            borderWidth: 0,
            opacity: 0.5,
            backgroundColor: "#CCC",
            width: "80px",
            height: "80px",
          });
        })
        .on("mouseleave", function () {
          gsap.to(ball, defaultValue);
        });
      // Data cursor
      if ($("[data-cursor]")) {
        $("[data-cursor]").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append('<div class="ball-view"></div>');
              $(".ball-view").append($(this).attr("data-cursor"));
              gsap.to(ball, hoverBall);
            })
            .on("mouseleave", function () {
              ball.find(".ball-view").remove();
              gsap.to(ball, defaultValue);
            });
        });
      }
      // Slider
      if ($(".slick-list")) {
        $(".slick-list").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append(
                '<div class="ball-drag"><i class="far fa-angle-left"></i><i class="far fa-angle-right"></i></div>'
              );
              // $(".ball-drag").append("read more");
              gsap.to(ball, hoverBall);
            })
            .on("mouseleave", function () {
              ball.find(".ball-drag").remove();
              gsap.to(ball, defaultValue);
            });
        });
      }
      // Gallery
      if ($(".gallery")) {
        $(".gallery").each(function () {
          $(this)
            .on("mouseenter", function () {
              ball.append(
                '<div class="ball-gallery"><i class="fa-sharp fa-solid fa-eye"></i></div>'
              );
              // $(".ball-drag").append("read more");
              gsap.to(ball, hoverBall);
            })
            .on("mouseleave", function () {
              ball.find(".ball-gallery").remove();
              gsap.to(ball, defaultValue);
            });
        });
      }
    },
    magnificPopup() {
      $(".play_btn").each(function () {
        $(this).magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          preloader: false,
          fixedContentPos: true,
        });
      });
      $(".image_popup,.gallery_popup a").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
        mainClass: "mfp-fade",
      });
      $(".details").magnificPopup({
        type: "inline",
        overflowY: "auto",
        closeBtnInside: true,
        mainClass: "mfp-fade zyan-popup",
      });
    },
    serviceHover() {
      const services = document.querySelectorAll(".tf__single_service_2");
      services.forEach((service) => {
        service.addEventListener("mouseenter", () => {
          document
            .querySelector(".tf__single_service_2.active")
            .classList.remove("active");
          service.classList.add("active");
        });
      });
    },
    locale() {
      const languageButtons = document.querySelectorAll(".language_switch__btn");
      if (!languageButtons.length) return;

      const translations = {
        en: {
          "brand.alt": "Wahyu Nur",
          "nav.home": "Home",
          "nav.about": "About",
          "nav.services": "Services",
          "nav.blog": "Blog",
          "nav.contact": "Contact",
          "hero.greeting": "Hi, I'm Wahyu! Creative",
          "hero.keyword1": "Developer",
          "hero.keyword2": "Website",
          "hero.keyword3": "Mobile",
          "hero.description":
            "I'm a fullstack developer focused on building impactful digital experiences through seamless integration between frontend design and backend functionality. Every project I develop aims to deliver performance, clarity, and meaningful user interaction.",
          "hero.download":
            'Download CV <i class="fa-solid fa-arrow-down-to-line"></i>',
          "hero.watch":
            '<i class="fa-sharp fa-solid fa-circle-play"></i> Watch the Video',
          "service.pretitle": "My Services",
          "service.title":
            "Crafting innovation through code and creativity",
          "service.website.title": "Website Development",
          "service.website.desc":
            "Design and develop responsive websites with Laravel, React, or Vue.js - covering landing pages, dashboards, and full-stack platforms.",
          "service.ai.title": "AI Integration & Chatbot Development",
          "service.ai.desc":
            "Embed OpenAI or bespoke LLM chatbots into product journeys, complete with context-aware automation.",
          "service.apps.title": "Apps Development",
          "service.apps.desc":
            "Ship cross-platform web and mobile apps with scalable architecture, polished UI, and maintainable code.",
          "about.pretitle": "About Me",
          "about.title": "Transforming visions into exceptional portfolios",
          "about.description":
            "Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione.",
          "about.activity.title": "Daily Activity",
          "about.activity.text": "Loream is ispam",
          "lang.switcher": "Select language",
          "chat.toggle": "Ask Wahyu",
          "chat.title": "Wahyu AI Assistant",
          "chat.subtitle": "Ask anything about Wahyu Nur",
          "chat.label": "Type your question",
          "chat.placeholder": "Ask about Wahyu...",
          "chat.submit": "Send",
          "chat.close": "Close chatbot",
        },
        id: {
          "brand.alt": "Wahyu Nur",
          "nav.home": "Beranda",
          "nav.about": "Tentang",
          "nav.services": "Layanan",
          "nav.blog": "Blog",
          "nav.contact": "Kontak",
          "hero.greeting": "Halo, saya Wahyu! Kreatif",
          "hero.keyword1": "Pengembang",
          "hero.keyword2": "Situs Web",
          "hero.keyword3": "Mobile",
          "hero.description":
            "Saya adalah pengembang fullstack yang fokus menghadirkan pengalaman digital yang berdampak melalui integrasi mulus antara desain frontend dan fungsionalitas backend. Setiap proyek yang saya bangun menekankan performa, kejelasan, dan interaksi pengguna yang bermakna.",
          "hero.download":
            'Unduh CV <i class="fa-solid fa-arrow-down-to-line"></i>',
          "hero.watch":
            '<i class="fa-sharp fa-solid fa-circle-play"></i> Tonton Videonya',
          "service.pretitle": "Layanan Saya",
          "service.title":
            "Mewujudkan inovasi melalui kode dan kreativitas",
          "service.website.title": "Pengembangan Website",
          "service.website.desc":
            "Merancang dan membangun situs responsif dengan Laravel, React, atau Vue.js - mencakup landing page, dashboard, hingga platform full-stack.",
          "service.ai.title": "Integrasi AI & Pengembangan Chatbot",
          "service.ai.desc":
            "Menanamkan OpenAI atau chatbot LLM kustom ke alur produk lengkap dengan automasi yang memahami konteks.",
          "service.apps.title": "Pengembangan Aplikasi",
          "service.apps.desc":
            "Membangun aplikasi web dan mobile lintas platform dengan arsitektur skalabel, UI rapi, dan kode yang mudah dirawat.",
          "about.pretitle": "Tentang Saya",
          "about.title": "Mengubah visi menjadi portofolio yang mengesankan",
          "about.description":
            "Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione.",
          "about.activity.title": "Aktivitas Harian",
          "about.activity.text": "Loream adalah ispam",
          "lang.switcher": "Pilih bahasa",
          "chat.toggle": "Tanya Wahyu",
          "chat.title": "Asisten AI Wahyu",
          "chat.subtitle": "Ajukan pertanyaan tentang Wahyu Nur",
          "chat.label": "Tulis pertanyaan",
          "chat.placeholder": "Tanya tentang Wahyu...",
          "chat.submit": "Kirim",
          "chat.close": "Tutup chatbot",
        },
      };

      const storedLang = localStorage.getItem("wn_lang");
      const defaultLang = translations[storedLang] ? storedLang : "en";

      const setActiveButton = (lang) => {
        languageButtons.forEach((btn) => {
          btn.classList.toggle("is-active", btn.dataset.lang === lang);
          btn.setAttribute(
            "aria-pressed",
            btn.dataset.lang === lang ? "true" : "false"
          );
        });
      };

      const applyTranslations = (lang) => {
        const dict = translations[lang] || translations.en;
        document.documentElement.setAttribute("lang", lang);

        document.querySelectorAll("[data-i18n]").forEach((el) => {
          const key = el.dataset.i18n;
          if (dict[key]) {
            el.innerHTML = dict[key];
          }
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
          const key = el.getAttribute("data-i18n-alt");
          if (dict[key]) {
            el.setAttribute("alt", dict[key]);
            el.setAttribute("title", dict[key]);
          }
        });

        document
          .querySelectorAll("[data-i18n-placeholder]")
          .forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (dict[key]) {
              el.setAttribute("placeholder", dict[key]);
            }
          });

        document
          .querySelectorAll("[data-i18n-aria-label]")
          .forEach((el) => {
            const key = el.getAttribute("data-i18n-aria-label");
            if (dict[key]) {
              el.setAttribute("aria-label", dict[key]);
            }
          });
      };

      const changeLanguage = (lang) => {
        const language = translations[lang] ? lang : "en";
        applyTranslations(language);
        setActiveButton(language);
        localStorage.setItem("wn_lang", language);
      };

      languageButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const lang = btn.dataset.lang;
          changeLanguage(lang);
        });
      });

      changeLanguage(defaultLang);
    },
    chatbot() {
      const chatbot = document.getElementById("wn-chatbot");
      if (!chatbot) return;

      const toggleBtn = chatbot.querySelector(".wn-chatbot__toggle");
      const closeBtn = chatbot.querySelector(".wn-chatbot__close");
      const panel = chatbot.querySelector(".wn-chatbot__panel");
      const form = chatbot.querySelector(".wn-chatbot__form");
      const input = chatbot.querySelector("#wn-chatbot-input");
      const messages = chatbot.querySelector(".wn-chatbot__messages");

      function normalise(text) {
        return (text || "")
          .toString()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
      }

      function cleanText(source) {
        if (!source) return "";
        const value =
          typeof source === "string" ? source : source.textContent || "";
        return value.replace(/\s+/g, " ").trim();
      }

      function getLang() {
        const langAttr = document.documentElement.getAttribute("lang") || "en";
        return langAttr.toLowerCase();
      }

      function isIndonesian() {
        return getLang().startsWith("id");
      }

      function localizedRandom(map) {
        const key = isIndonesian() ? "id" : "en";
        const options =
          (map[key] && map[key].length ? map[key] : map.en || map.id || []) || [];
        if (!options.length) return "";
        return options[Math.floor(Math.random() * options.length)];
      }

      function listToSentence(items, lang) {
        if (!Array.isArray(items) || !items.length) return "";
        if (items.length === 1) return items[0];
        const joiner = lang === "id" ? " dan " : " and ";
        if (items.length === 2) {
          return `${items[0]}${joiner}${items[1]}`;
        }
        return `${items.slice(0, -1).join(", ")}${joiner}${items[items.length - 1]}`;
      }

      function getHeroDetails() {
        return {
          greeting: cleanText(
            document.querySelector('[data-i18n="hero.greeting"]')
          ),
          description: cleanText(
            document.querySelector('[data-i18n="hero.description"]')
          ),
        };
      }

      function getServices() {
        return Array.from(
          document.querySelectorAll("#service .tf__single_service")
        )
          .map((card) => {
            const title = cleanText(card.querySelector("h3"));
            const description = cleanText(card.querySelector("p"));
            const compact = normalise(title).replace(/[^a-z0-9]/g, "");
            let aliases = [];
            if (compact.includes("website")) {
              aliases = ["website", "web", "websites", "landing"];
            } else if (
              compact.includes("aiintegration") ||
              compact.includes("chatbot")
            ) {
              aliases = ["ai", "chatbot", "bot", "integrasi", "openai"];
            } else if (compact.includes("app")) {
              aliases = ["app", "apps", "aplikasi", "mobile", "application"];
            }
            return {
              title,
              description,
              aliases,
              compact,
            };
          })
          .filter((item) => item.title);
      }

      function describeServiceByKey(key) {
        const services = getServices();
        let match = null;
        services.forEach((service) => {
          if (match) return;
          const compact = service.compact || "";
          if (key === "website" && compact.includes("website")) {
            match = service;
          } else if (
            key === "ai" &&
            (compact.includes("aiintegration") || compact.includes("chatbot"))
          ) {
            match = service;
          } else if (key === "apps" && compact.includes("app")) {
            match = service;
          }
        });
        if (!match) return "";
        const lang = getLang();
        const hasDescription = !!match.description;
        if (lang.startsWith("id")) {
          return hasDescription
            ? `Layanan "${match.title}" menjelaskan ${match.description}.`
            : `Layanan "${match.title}" tersedia di bagian Services.`;
        }
        return hasDescription
          ? `The "${match.title}" service covers ${match.description}.`
          : `The "${match.title}" service appears in the Services section.`;
      }

      function describeServicesOverview() {
        const services = getServices();
        if (!services.length) return "";
        const lang = getLang();
        const summary = services
          .map((service) =>
            service.description
              ? `${service.title} - ${service.description}`
              : service.title
          )
          .join("; ");
        return lang.startsWith("id")
          ? `Layanan di halaman ini mencakup ${summary}.`
          : `Services on this page include ${summary}.`;
      }

      function getTimeline() {
        return Array.from(document.querySelectorAll("#skills .tf__single_skills"))
          .map((item) => ({
            period: cleanText(item.querySelector("span")),
            title: cleanText(item.querySelector("h3")),
            description: cleanText(item.querySelector("p")),
          }))
          .filter((entry) => entry.period && entry.title);
      }

      function describeTimelineInfo() {
        const timeline = getTimeline();
        if (!timeline.length) return "";
        const lang = getLang();
        const summary = timeline
          .map((item) => `${item.period} - ${item.title}`)
          .join("; ");
        return lang.startsWith("id")
          ? `Timeline Education & Skill menampilkan ${summary}.`
          : `The Education & Skill timeline highlights ${summary}.`;
      }

      function getSkills() {
        return Array.from(
          document.querySelectorAll("#skills .tf__team_skills_bar_single")
        )
          .map((item) => {
            const name = cleanText(item.querySelector("p"));
            const fill = item.querySelector(".fill");
            const percentage = fill
              ? fill.getAttribute("data-percentage") || fill.dataset.percentage
              : "";
            return {
              name,
              percentage: percentage ? percentage.replace(/[^0-9.]/g, "") : "",
            };
          })
          .filter((skill) => skill.name);
      }

      function describeSkillsOverview() {
        const skills = getSkills();
        if (!skills.length) return "";
        const lang = getLang();
        const summary = skills
          .map((skill) =>
            skill.percentage
              ? `${skill.name} ${skill.percentage}%`
              : skill.name
          )
          .join(", ");
        return lang.startsWith("id")
          ? `Skill bar menampilkan ${summary}.`
          : `The skill bars show ${summary}.`;
      }

      function describeSkillMatch(tokensSet, collapsedTokensSet) {
        const skills = getSkills();
        const aliasMap = {
          html: [],
          css: [],
          python: [],
          laravel: [],
          javascript: ["js"],
          figma: [],
        };
        for (const skill of skills) {
          const normalized = normalise(skill.name)
            .replace(/[^a-z0-9\s]/g, " ")
            .trim();
          const collapsed = normalized.replace(/\s+/g, "");
          const parts = normalized.split(/\s+/).filter(Boolean);
          const aliases = aliasMap[collapsed] || [];
          const matchesParts = parts.length && parts.every((part) => tokensSet.has(part));
          const matchesCollapsed = collapsedTokensSet.has(collapsed);
          const matchesAlias = aliases.some((alias) => tokensSet.has(alias));
          if (matchesParts || matchesCollapsed || matchesAlias) {
            const lang = getLang();
            const percentText = skill.percentage ? `${skill.percentage}%` : "";
            if (lang.startsWith("id")) {
              return percentText
                ? `${skill.name} tercantum di skill bar dengan level ${percentText}.`
                : `${skill.name} tercantum di skill bar.`;
            }
            return percentText
              ? `${skill.name} appears in the skill bar at ${percentText}.`
              : `${skill.name} appears in the skill bar.`;
          }
        }
        return "";
      }

      function getContactDetails() {
        const info = {
          address: "",
          phone: "",
          email: "",
        };
        document.querySelectorAll("#footer .tf__footer_content").forEach((block) => {
          const heading = cleanText(block.querySelector(".text h3")).toLowerCase();
          const details = Array.from(
            block.querySelectorAll(".text a, .text p")
          )
            .map((el) => cleanText(el))
            .filter(Boolean);
          if (!heading || !details.length) return;
          if (heading.includes("address")) {
            info.address = details.join(", ");
          } else if (
            heading.includes("talk") ||
            heading.includes("phone") ||
            heading.includes("call")
          ) {
            info.phone = details.join(" / ");
          } else if (heading.includes("email")) {
            info.email = details.join(", ");
          }
        });
        return info;
      }

      function describeAddressInfo() {
        const { address } = getContactDetails();
        if (!address) return "";
        return isIndonesian()
          ? `Alamat yang tertera di footer adalah ${address}.`
          : `The footer lists the address as ${address}.`;
      }

      function describePhoneInfo() {
        const { phone } = getContactDetails();
        if (!phone) return "";
        return isIndonesian()
          ? `Nomor telepon yang tercantum adalah ${phone}.`
          : `The listed phone number is ${phone}.`;
      }

      function describeEmailInfo() {
        const { email } = getContactDetails();
        if (!email) return "";
        return isIndonesian()
          ? `Email yang tersedia adalah ${email}.`
          : `The available email address is ${email}.`;
      }

      function describeContactInfo() {
        const info = getContactDetails();
        const lang = getLang();
        const contactParts = [];
        if (info.phone) {
          contactParts.push(
            lang.startsWith("id") ? `telepon ${info.phone}` : `phone ${info.phone}`
          );
        }
        if (info.email) {
          contactParts.push(
            lang.startsWith("id") ? `email ${info.email}` : `email ${info.email}`
          );
        }
        const contactSentence = contactParts.length
          ? lang.startsWith("id")
            ? `Kamu bisa menghubungi Wahyu lewat ${listToSentence(contactParts, "id")}.`
            : `You can reach Wahyu via ${listToSentence(contactParts, "en")}.`
          : "";
        const addressSentence = info.address
          ? lang.startsWith("id")
            ? `Alamat yang tercantum: ${info.address}.`
            : `The listed address is ${info.address}.`
          : "";
        return `${contactSentence} ${addressSentence}`.trim();
      }

      function getCvInfo() {
        const link = document.querySelector('[data-i18n="hero.download"]');
        return {
          label: cleanText(link),
          href: link ? link.getAttribute("href") || "" : "",
        };
      }

      function describeCvInfo() {
        const { label, href } = getCvInfo();
        if (!label) return "";
        const lang = getLang();
        const isPlaceholder = !href || href === "#";
        if (lang.startsWith("id")) {
          return isPlaceholder
            ? `Tombol ${label} ada di hero section, namun tautannya masih ${href || "#"} jadi belum menuju file CV.`
            : `Kamu bisa mengunduh CV lewat tombol ${label} dengan tautan ${href}.`;
        }
        return isPlaceholder
          ? `The ${label} button is visible in the hero section, but it currently points to ${href || "#"}, so no CV file is attached yet.`
          : `You can download the CV via the ${label} button at ${href}.`;
      }

      function getVideoInfo() {
        const link = document.querySelector(".banner_video_btn");
        return {
          label: cleanText(link),
          href: link ? link.getAttribute("href") || "" : "",
        };
      }

      function describeVideoInfo() {
        const { label, href } = getVideoInfo();
        if (!label && !href) return "";
        const lang = getLang();
        if (lang.startsWith("id")) {
          return href
            ? `Tombol ${label || "Watch the Video"} di hero membuka tautan ${href}.`
            : "Ada tombol video di hero section, tetapi tautannya belum diatur.";
        }
        return href
          ? `The ${label || "Watch the Video"} button in the hero section opens ${href}.`
          : "There is a video button in the hero section, but its link has not been set.";
      }

      function getBlogPosts() {
        return Array.from(document.querySelectorAll("#blogs .tf__slingle_blog"))
          .map((item) => ({
            title: cleanText(item.querySelector(".tf__blog_text a")),
            date: cleanText(item.querySelector(".tf__blog_text span")),
          }))
          .filter((post) => post.title);
      }

      function describeBlogInfo() {
        const posts = getBlogPosts();
        if (!posts.length) return "";
        const lang = getLang();
        const summary = posts
          .map((post) => (post.date ? `${post.title} (${post.date})` : post.title))
          .join("; ");
        return lang.startsWith("id")
          ? `Bagian blog menampilkan ${summary}.`
          : `The blog section features ${summary}.`;
      }

      function describeLanguageInfo() {
        const buttons = Array.from(
          document.querySelectorAll(".language_switch__btn")
        ).map((btn) => cleanText(btn));
        if (!buttons.length) return "";
        const lang = getLang();
        const options = listToSentence(buttons, lang.startsWith("id") ? "id" : "en");
        return lang.startsWith("id")
          ? `Halaman ini menyediakan pilihan bahasa ${options} melalui tombol di menu, dan chatbot mengikuti bahasa yang sedang aktif.`
          : `The page offers ${options} language options via the header switcher, and the chatbot follows the active language.`;
      }

      function describeProfileInfo() {
        const hero = getHeroDetails();
        const lang = getLang();
        const description = hero.description;
        if (lang.startsWith("id")) {
          const extra = description
            ? ` Deskripsi hero menuliskan: "${description}".`
            : "";
          return `Wahyu Nur adalah developer fullstack yang memadukan desain frontend dan backend untuk membangun pengalaman digital berdampak.${extra}`.trim();
        }
        const extra = description ? ` The hero section states: "${description}".` : "";
        return `Wahyu Nur is a fullstack developer who blends frontend design and backend engineering to deliver impactful digital experiences.${extra}`.trim();
      }

      function describeMissionInfo() {
        const hero = getHeroDetails();
        const lang = getLang();
        const description = hero.description;
        if (!description) {
          return lang.startsWith("id")
            ? "Misi Wahyu difokuskan pada pembangunan pengalaman digital yang berdampak."
            : "Wahyu focuses on building impactful digital experiences.";
        }
        return lang.startsWith("id")
          ? `Misi Wahyu di hero section menyoroti pembangunan pengalaman digital yang berdampak melalui integrasi frontend dan backend: "${description}".`
          : `The hero section highlights Wahyu's mission: "${description}", emphasising impactful digital experiences through seamless frontend-backend integration.`;
      }

      function describeServiceFallback(tokensSet) {
        const services = getServices();
        for (const service of services) {
          if (service.aliases.some((alias) => tokensSet.has(alias))) {
            const lang = getLang();
            const hasDescription = !!service.description;
            if (lang.startsWith("id")) {
              return hasDescription
                ? `Layanan "${service.title}" menjelaskan ${service.description}.`
                : `Layanan "${service.title}" tersedia di bagian Services.`;
            }
            return hasDescription
              ? `The "${service.title}" service covers ${service.description}.`
              : `The "${service.title}" service appears in the Services section.`;
          }
        }
        return "";
      }

      const greetingMessages = {
        en: [
          "Hi! Feel free to ask anything about Wahyu Nur's portfolio.",
          "Hello! I can walk you through Wahyu's services, skills, experience, or contact details.",
          "Welcome! Ask me anything about the work Wahyu showcases here.",
        ],
        id: [
          "Hai! Ada yang ingin kamu ketahui tentang portofolio Wahyu Nur? Tanyakan saja.",
          "Halo! Aku siap bantu jelaskan layanan, skill, atau cara menghubungi Wahyu.",
          "Selamat datang! Silakan tanya apa pun seputar portofolio Wahyu di halaman ini.",
        ],
      };

      const defaultResponses = {
        en: [
          "Sorry, I only have information from this portfolio page. Try asking about Wahyu's profile, services, skills, experience, or contact details.",
          "I couldn't find that topic here. You can ask about services, tech stack, experience, blog posts, or how to reach Wahyu.",
          "Nothing on this page matches that question. Please focus on the portfolio content such as services, skills, achievements, or contact options.",
        ],
        id: [
          "Maaf, aku hanya punya informasi dari halaman portofolio ini. Coba tanya tentang profil, layanan, skill, pengalaman, atau kontak Wahyu ya.",
          "Pertanyaan itu belum ada jawabannya di sini. Kamu bisa menanyakan layanan, teknologi yang dipakai, pengalaman, blog, atau cara menghubungi Wahyu.",
          "Aku belum menemukan info itu di halaman ini. Fokuskan pertanyaan ke konten portofolio seperti jasa, skill, pencapaian, atau detail kontak.",
        ],
      };

      const knowledgeBase = [
        {
          tests: [
            ["siapa", "wahyu"],
            ["profil", "wahyu"],
            ["tentang", "wahyu"],
            ["about", "wahyu"],
            ["who", "wahyu"],
            ["wahyu", "nur"],
            ["portofolio"],
            ["portfolio"],
            ["porto"],
          ],
          answer: describeProfileInfo,
        },
        {
          tests: [
            ["misi", "wahyu"],
            ["fokus", "wahyu"],
            ["apa", "lakukan"],
            ["tujuan", "wahyu"],
            ["what", "does", "wahyu", "do"],
            ["mission"],
            ["goal", "wahyu"],
          ],
          answer: describeMissionInfo,
        },
        {
          tests: [
            ["website", "development"],
            ["layanan", "website"],
            ["pengembangan", "website"],
            ["buat", "website"],
            ["website"],
            ["landing", "page"],
          ],
          answer: () => describeServiceByKey("website"),
        },
        {
          tests: [
            ["ai", "integration"],
            ["ai", "chatbot"],
            ["chatbot"],
            ["integrasi", "ai"],
            ["openai"],
            ["bot"],
          ],
          answer: () => describeServiceByKey("ai"),
        },
        {
          tests: [
            ["apps", "development"],
            ["aplikasi", "mobile"],
            ["app", "development"],
            ["pengembangan", "aplikasi"],
            ["mobile", "app"],
            ["aplikasi"],
          ],
          answer: () => describeServiceByKey("apps"),
        },
        {
          tests: [
            ["layanan"],
            ["services"],
            ["service", "wahyu"],
            ["jasa"],
            ["offer"],
            ["apa", "ditawarkan"],
          ],
          answer: describeServicesOverview,
        },
        {
          tests: [
            ["pendidikan"],
            ["education"],
            ["riwayat", "pendidikan"],
            ["timeline"],
            ["experience", "timeline"],
          ],
          answer: describeTimelineInfo,
        },
        {
          tests: [
            ["skill"],
            ["skills"],
            ["keahlian"],
            ["kemampuan"],
            ["tech", "stack"],
            ["teknologi"],
          ],
          answer: describeSkillsOverview,
        },
        {
          tests: [["alamat"], ["address"], ["lokasi"], ["dimana", "wahyu"], ["based"]],
          answer: describeAddressInfo,
        },
        {
          tests: [
            ["telepon"],
            ["nomor", "telepon"],
            ["phone"],
            ["kontak", "telepon"],
            ["whatsapp"],
            ["call"],
          ],
          answer: describePhoneInfo,
        },
        {
          tests: [["email"], ["surel"], ["kirim", "email"], ["mail"], ["pesan", "email"]],
          answer: describeEmailInfo,
        },
        {
          tests: [
            ["hubungi"],
            ["contact"],
            ["hubung", "wahyu"],
            ["reach", "wahyu"],
            ["cara", "menghubungi"],
            ["menghubungi"],
          ],
          answer: describeContactInfo,
        },
        {
          tests: [["download", "cv"], ["cv"], ["resume"], ["unduh", "cv"], ["curriculum", "vitae"]],
          answer: describeCvInfo,
        },
        {
          tests: [["video"], ["watch", "video"], ["tonton", "video"], ["youtube"], ["play", "video"]],
          answer: describeVideoInfo,
        },
        {
          tests: [["blog"], ["artikel"], ["tulisan"], ["post"], ["berita"]],
          answer: describeBlogInfo,
        },
        {
          tests: [["bahasa"], ["language"], ["switch", "language"], ["indonesia"], ["english"]],
          answer: describeLanguageInfo,
        },
      ];

      function pickGreeting() {
        return (
          localizedRandom(greetingMessages) ||
          (isIndonesian()
            ? "Halo! Silakan tanya apa pun tentang portofolio ini."
            : "Hello! Feel free to ask anything about this portfolio.")
        );
      }

      function pickDefault() {
        return (
          localizedRandom(defaultResponses) ||
          (isIndonesian()
            ? "Maaf, aku hanya bisa menjawab seputar konten portofolio Wahyu di halaman ini."
            : "Sorry, I can only answer questions about Wahyu's portfolio on this page.")
        );
      }

      const appendMessage = (author, text) => {
        const wrapper = document.createElement("div");
        wrapper.className = `wn-chatbot__message wn-chatbot__message--${author}`;

        const bubble = document.createElement("div");
        bubble.className = "wn-chatbot__bubble";
        bubble.textContent = text;

        wrapper.appendChild(bubble);
        messages.appendChild(wrapper);
        messages.scrollTop = messages.scrollHeight;
      };

      function resolveAnswer(answer) {
        const resolved = typeof answer === "function" ? answer() : answer;
        return typeof resolved === "string" ? resolved : "";
      }

      const findResponse = (query) => {
        const cleanQuery = normalise(query).replace(/[^a-z0-9\s]/g, " ");
        const tokens = cleanQuery.split(/\s+/).filter(Boolean);
        if (!tokens.length) {
          return pickDefault();
        }

        if (/\b(hai|halo|hello|hei|hey)\b/.test(cleanQuery)) {
          return pickGreeting();
        }

        const tokensSet = new Set(tokens);
        const collapsedTokensSet = new Set(
          tokens.map((token) => token.replace(/\s+/g, ""))
        );

        const contains = (keyword) => {
          const cleanKeyword = normalise(keyword).replace(/[^a-z0-9\s]/g, " ");
          const keywordTokens = cleanKeyword.split(/\s+/).filter(Boolean);
          if (!keywordTokens.length) return false;
          return keywordTokens.every((token) => tokensSet.has(token));
        };

        const matchesRule = (tests = []) =>
          Array.isArray(tests) &&
          tests.some(
            (keywords) =>
              Array.isArray(keywords) && keywords.every((keyword) => contains(keyword))
          );

        for (const item of knowledgeBase) {
          if (matchesRule(item.tests)) {
            const answer = resolveAnswer(item.answer);
            if (answer) return answer;
          }
        }

        const serviceAnswer = describeServiceFallback(tokensSet);
        if (serviceAnswer) return serviceAnswer;

        const skillAnswer = describeSkillMatch(tokensSet, collapsedTokensSet);
        if (skillAnswer) return skillAnswer;

        return pickDefault();
      };
      const syncChatState = (isOpen) => {
        panel.hidden = !isOpen;
        toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        chatbot.classList.toggle("is-open", isOpen);
        if (isOpen) {
          setTimeout(() => {
            input.focus();
          }, 150);
          if (!messages.dataset.bootstrapped) {
            appendMessage("bot", pickGreeting());
            messages.dataset.bootstrapped = "true";
          }
        }
      };

      const openChat = () => syncChatState(true);

      const closeChat = () => {
        syncChatState(false);
        toggleBtn.focus();
      };

      toggleBtn.addEventListener("click", () => {
        if (panel.hidden) {
          openChat();
        } else {
          closeChat();
        }
      });

      closeBtn.addEventListener("click", closeChat);

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const value = input.value.trim();
        if (!value) return;

        appendMessage("user", value);
        input.value = "";
        input.focus();

        setTimeout(() => {
          appendMessage("bot", findResponse(value));
        }, 350);
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !panel.hidden) {
          closeChat();
        }
      });
    },
  };
  $(document).ready(function () {
    zyan.init();
    zyan.preloader();
  });
})(jQuery);


