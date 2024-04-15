(function (window, document, undefined) {
  window.addEventListener('DOMContentLoaded', function (event) {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    head.appendChild(style);

    style.innerHTML += 'html[lang|=id-id] body, html[lang|=ru-ru] body, html[lang|=pt-pt] body, html[lang|=fr-fr] body { font-family: "en inpin", "Microsoft YaHei", "Arial", "Helvetica", sans-serif !important; } ';
    style.innerHTML += "body::-webkit-scrollbar {background: #efefef; display: block!important; overflow: scroll!important; -ms-overflow-style: auto!important; scrollbar-color: red orange;} ";
    style.innerHTML += ".loading { visibility: hidden; display: none; } ";
    style.innerHTML += ".loading[data-v-0be5b554] { visibility: hidden; } ";
    style.innerHTML += "* { user-select: text; } ";
    style.innerHTML += ".footer__socialbar {justify-content: center!important; border-bottom: 0px!important;} ";
    style.innerHTML += "::selection {background: #333; color: #fff;/* Safari */} ";
    style.innerHTML += "::-moz-selection {background: #333; color: #fff;/* Firefox */} ";
    style.innerHTML += "body::-webkit-scrollbar-thumb {background: #666666; border-radius: 20px; border: 2px solid #efefef; background-color: rgba(0, 0, 0, .5);} ";
    
    style.innerHTML += "html[lang|=ru-ru] .home-feature__info-title {letter-spacing: -0.1vw;} ";
    style.innerHTML += "html[lang|=ru-ru] .home-feature__info-summary {letter-spacing: -0.05vw;} ";
    style.innerHTML += "html[lang|=ru-ru] .section__concept-title-label {letter-spacing: -0.1vw;} ";
    style.innerHTML += "html[lang|=ru-ru] .more-btn {letter-spacing: -0.03vw;} ";
    style.innerHTML += "html[lang|=ru-ru] .home-character__camp {letter-spacing: -0.05vw;} ";
    style.innerHTML += "html[lang|=ru-ru] .home-character__name {letter-spacing: -0.1vw;} ";
    style.innerHTML += "html[lang|=ru-ru] .character__name {letter-spacing: -0.05vw;} ";
    style.innerHTML += "html[lang|=ru-ru] .character__word {letter-spacing: -0.03vw;} ";

    style.innerHTML += " ";

    style.innerHTML += ".extension__advertisement { visibility: hidden; } ";

    localStorage.setItem('napSeaBgAudioOfficial', '{"data":false}');
    localStorage.setItem('@me/audio_cache_by_zzz.mihoyo/', '{"data":false}');
    localStorage.setItem('napCnBgAudioOfficial', '{"data":false}');
    localStorage.setItem('@me/audio_cache_by_zenless.hoyoverse/', '{"data":false}');
    localStorage.setItem('cookieTips_cache_by_zenless.hoyoverse/', '{"data":false}');
  });
})(this, this.document);

