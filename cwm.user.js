// ==UserScript==
// @name         CatWar Mod
// @name:ru      Варомод
// @namespace    https://catwar.net/blog482084; Удален Хвойницей
// @version      25.2.5
// @description  Полезные дополнения для catwar.su
// @author       Fredo14
// @copyright    2019—2020, Хвойница (https://catwar.net/cat209467); Исправления Ромашковый (https://catwar.net/cat965285)
// @license      MIT; https://opensource.org/licenses/MIT
// @match        https://*.catwar.net/*
// @match        https://*.catwar.su/*
// @updateURL    https://cw-mod.github.io/cw-mod/cwm.user.js
// @downloadURL  https://cw-mod.github.io/cw-mod/cwm.user.js
// @homepageURL  https://cw-mod.github.io/cw-mod/  // Страница с информацией
// @supportURL   https://cw-mod.github.io/cw-mod/issues // Страница для репорта багов
// @grant        none
// ==/UserScript==

(function (window, document, $) {
  'use strict';

  if (typeof $ === 'undefined') return;

  const baseUrl = `https://${window.location.hostname}`;
  const avatarDomain = `//e.${window.location.hostname.replace('www.', '')}`;

  const VERSION = '2.4.2';

  const CONF_BLOGS_TAGS_OPEN = 'blogs_tags_open';
  const CONF_SNIFF_TAGS1_OPEN = 'sniff_tags1_open';
  const CONF_SNIFF_TAGS2_OPEN = 'sniff_tags2_open';

  const CONF_LS_LAST_SEARCH = 'ls_last_search';
  const CONF_LS_ENABLE_SAVING = 'ls_enable_saving';
  const CONF_BLOGS_ANSWER_BUTTON = 'blogs_answer_btn';
  const CONF_BLOGS_CITE_BUTTON = 'blogs_cite_btn';
  const CONF_BLOGS_CITE_BUTTON_HIDE = 'blogs_cite_btn_hide';
  const CONF_BLOGS_COMMENTS_SMILES = 'blogs_comments_smiles';
  const CONF_BLOGS_AVATARS = 'blogs_avatars';
  const CONF_BLOGS_AVATARS_SIZE = 'blogs_avatars_size';
  const CONF_BLOGS_AVATARS_BORDER = 'blogs_avatars_border';
  const CONF_BLOGS_AVATARS_NO_CROP = 'blogs_avatars_no_crop';
  const CONF_BLOGS_IMAGES_MAX_WIDTH = 'blogs_img_width';
  const CONF_SNIFF_IMAGES_MAX_WIDTH = 'sniff_img_width';
  const CONF_INDEX_SAVE_ALERT = 'index_save_alert';
  const CONF_CREATION_SAVE_ALERT = 'creation_save_alert';
  const CONF_KNS_SAVE_ALERT = 'kns_save_alert';
  const CONF_INDEX_EDUCATION_HIDE = 'index_education_hide';
  const CONF_SETTINGS_HIDE_EMAIL = 'settings_hide_email';
  const CONF_CAT_ADD_KRAFT_NUMBER = 'cat_add_kraft_number';
  const CONF_CAT_ENABLE_NOTES = 'cat_enable_notes';
  const CONF_FAE_SHOW_NOTES = 'fae_show_notes';

  const CONF_CW3_ACT_END_IN_TITLE = 'cw3_act_end_in_title';
  const CONF_CW3_ACT_END_ALERT = 'cw3_act_end_alert';
  const CONF_CW3_ACT_END_ALERT_SOUND = 'cw3_act_end_alert_sound';
  const CONF_CW3_ACT_END_ALERT_VOLUME = 'cw3_act_end_alert_volume';
  const CONF_CW3_ACT_END_ALERT_TIME = 'cw3_act_end_alert_time';
  const CONF_CW3_ACT_END_ALERT_BLUR_ONLY = 'cw3_act_end_blur_only';
  const CONF_CW3_FIGHT_PANEL_HEIGHT = 'cw3_fight_panel_height';
  const CONF_CW3_THEME = 'cw3_theme';
  const CONF_CW3_COMPACT = 'cw3_compact';
  const CONF_CW3_COMPACT_SWAP_SIDES = 'cw3_compact_swap_sides';
  const CONF_CW3_COMPACT_CHAT_ON_TOP = 'cw3_compact_chat_on_top';
  const CONF_CW3_COMPACT_ROUND_EDGES = 'cw3_compact_round_edges';
  const CONF_CW3_COMPACT_SPLIT_INFO = 'cw3_compact_split_info';
  const CONF_CW3_COMPACT_HIDE_HEADERS = 'cw3_compact_hide_headers';
  const CONF_CW3_COMPACT_SPLIT_INFO_STICKY_HEADERS = 'cw3_compact_split_info_sticky_headers';
  const CONF_CW3_BACKGROUND = 'cw3_bg';
  const CONF_CW3_BACKGROUND_IMAGE = 'cw3_bg_image';
  const CONF_CW3_BACKGROUND_SIZE = 'cw3_bg_size';
  const CONF_CW3_BACKGROUND_POSITION = 'cw3_bg_position';
  const CONF_CW3_WEATHER_SNOW = 'cw3_weather_snow';
  const CONF_CW3_HIDE_SKY = 'cw3_hide_sky';
  const CONF_CW3_CAGES_BORDERS = 'cw3_cages_borders';
  const CONF_CW3_CHAT_LOUD_QUIETER = 'cw3_chat_loud_quieter';
  const CONF_CW3_CHAT_QUIET_LOUDER = 'cw3_chat_quiet_louder';
  const CONF_CW3_LOWER_CATS = 'cw3_lower_cats';
  const CONF_CW3_LOWER_ARROWS = 'cw3_lower_arrows';
  const CONF_CW3_DEAD_OPAQUE = 'cw3_dead_opaque';
  const CONF_CW3_ADD_REALISM = 'cw3_add_realism';
  const CONF_CW3_ALWAYS_DAY = 'cw3_always_day';
  const CONF_CW3_MENU_TARGET_BLANK = 'cw3_menu_blank';
  const CONF_CW3_MENU_ABOUT = 'cw3_menu_about';
  const CONF_CW3_MENU_INDEX = 'cw3_menu_index';
  const CONF_CW3_MENU_TOP = 'cw3_menu_top';
  const CONF_CW3_MENU_CHAT = 'cw3_menu_chat';
  const CONF_CW3_MENU_LS = 'cw3_menu_ls';
  const CONF_CW3_MENU_LS0 = 'cw3_menu_ls0';
  const CONF_CW3_MENU_BLOGS = 'cw3_menu_blogs';
  const CONF_CW3_MENU_SNIFF = 'cw3_menu_sniff';
  const CONF_CW3_MENU_SETTINGS = 'cw3_menu_settings';
  const CONF_CW3_MENU_MOBILE = 'cw3_menu_mobile';
  const CONF_CW3_HISTORY_NO_UNDERLINE = 'cw3_history_no_underline';
  const CONF_CW3_CAT_INFO = 'cw3_cat_info';
  const CONF_CW3_MODIFY_INVENTORY = 'cw3_modify_inventory';
  const CONF_CW3_PARAMETERS_INFO = 'cw3_parameters_info';

  const DEFAULTS = {};
  DEFAULTS[CONF_BLOGS_TAGS_OPEN] = false;
  DEFAULTS[CONF_SNIFF_TAGS1_OPEN] = false;
  DEFAULTS[CONF_SNIFF_TAGS2_OPEN] = false;

  DEFAULTS[CONF_LS_LAST_SEARCH] = { folder: 0, type: 1 };
  DEFAULTS[CONF_LS_ENABLE_SAVING] = true;
  DEFAULTS[CONF_INDEX_SAVE_ALERT] = false;
  DEFAULTS[CONF_INDEX_EDUCATION_HIDE] = false;
  DEFAULTS[CONF_CAT_ADD_KRAFT_NUMBER] = false;
  DEFAULTS[CONF_CAT_ENABLE_NOTES] = true;
  DEFAULTS[CONF_FAE_SHOW_NOTES] = true;
  DEFAULTS[CONF_BLOGS_ANSWER_BUTTON] = true;
  DEFAULTS[CONF_BLOGS_CITE_BUTTON] = true;
  DEFAULTS[CONF_BLOGS_CITE_BUTTON_HIDE] = false;
  DEFAULTS[CONF_BLOGS_COMMENTS_SMILES] = false;
  DEFAULTS[CONF_BLOGS_AVATARS] = false;
  DEFAULTS[CONF_BLOGS_AVATARS_SIZE] = 100;
  DEFAULTS[CONF_BLOGS_AVATARS_BORDER] = true;
  DEFAULTS[CONF_BLOGS_AVATARS_NO_CROP] = false;
  DEFAULTS[CONF_BLOGS_IMAGES_MAX_WIDTH] = 0;
  DEFAULTS[CONF_SNIFF_IMAGES_MAX_WIDTH] = 0;
  DEFAULTS[CONF_CREATION_SAVE_ALERT] = false;
  DEFAULTS[CONF_KNS_SAVE_ALERT] = false;
  DEFAULTS[CONF_SETTINGS_HIDE_EMAIL] = false;

  DEFAULTS[CONF_CW3_ACT_END_IN_TITLE] = false;
  DEFAULTS[CONF_CW3_ACT_END_ALERT] = false;
  DEFAULTS[CONF_CW3_ACT_END_ALERT_SOUND] = 'https://cw-mod.github.io/cw-mod/resources/cat-meow-squeak.mp3';
  DEFAULTS[CONF_CW3_ACT_END_ALERT_VOLUME] = 1;
  DEFAULTS[CONF_CW3_ACT_END_ALERT_TIME] = 1;
  DEFAULTS[CONF_CW3_ACT_END_ALERT_BLUR_ONLY] = false;
  DEFAULTS[CONF_CW3_FIGHT_PANEL_HEIGHT] = 70;
  DEFAULTS[CONF_CW3_THEME] = 'default';
  DEFAULTS[CONF_CW3_COMPACT] = false;
  DEFAULTS[CONF_CW3_COMPACT_SWAP_SIDES] = false;
  DEFAULTS[CONF_CW3_COMPACT_CHAT_ON_TOP] = true;
  DEFAULTS[CONF_CW3_COMPACT_ROUND_EDGES] = false;
  DEFAULTS[CONF_CW3_COMPACT_HIDE_HEADERS] = false;
  DEFAULTS[CONF_CW3_COMPACT_SPLIT_INFO] = true;
  DEFAULTS[CONF_CW3_COMPACT_SPLIT_INFO_STICKY_HEADERS] = true;
  DEFAULTS[CONF_CW3_BACKGROUND] = 'default';
  DEFAULTS[CONF_CW3_BACKGROUND_IMAGE] = '/cw3/sky/1.png';
  DEFAULTS[CONF_CW3_BACKGROUND_SIZE] = 'auto';
  DEFAULTS[CONF_CW3_BACKGROUND_POSITION] = 'top left';
  DEFAULTS[CONF_CW3_WEATHER_SNOW] = false;
  DEFAULTS[CONF_CW3_HIDE_SKY] = false;
  DEFAULTS[CONF_CW3_CAGES_BORDERS] = false;
  DEFAULTS[CONF_CW3_CHAT_LOUD_QUIETER] = false;
  DEFAULTS[CONF_CW3_CHAT_QUIET_LOUDER] = false;
  DEFAULTS[CONF_CW3_LOWER_CATS] = false;
  DEFAULTS[CONF_CW3_LOWER_ARROWS] = true;
  DEFAULTS[CONF_CW3_DEAD_OPAQUE] = false;
  DEFAULTS[CONF_CW3_ADD_REALISM] = false;
  DEFAULTS[CONF_CW3_ALWAYS_DAY] = false;
  DEFAULTS[CONF_CW3_HISTORY_NO_UNDERLINE] = false;
  DEFAULTS[CONF_CW3_CAT_INFO] = false;
  DEFAULTS[CONF_CW3_MODIFY_INVENTORY] = false;
  DEFAULTS[CONF_CW3_PARAMETERS_INFO] = true;

  DEFAULTS[CONF_CW3_MENU_TARGET_BLANK] = false;
  DEFAULTS[CONF_CW3_MENU_ABOUT] = false;
  DEFAULTS[CONF_CW3_MENU_INDEX] = true;
  DEFAULTS[CONF_CW3_MENU_TOP] = false;
  DEFAULTS[CONF_CW3_MENU_CHAT] = true;
  DEFAULTS[CONF_CW3_MENU_LS] = true;
  DEFAULTS[CONF_CW3_MENU_LS0] = false;
  DEFAULTS[CONF_CW3_MENU_BLOGS] = false;
  DEFAULTS[CONF_CW3_MENU_SNIFF] = false;
  DEFAULTS[CONF_CW3_MENU_SETTINGS] = true;
  DEFAULTS[CONF_CW3_MENU_MOBILE] = false;

  let SETTINGS = {};
  let thisPageSettings = [];

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const catTimeStart = 1200000000000;

  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  const isDesktop = isPage(/cw3\/(?!(kns|jagd))/) ? $('#app').data('mobile') === 0 : $('#branch').length;

  const body = $('body');

  if (!Date.prototype.toISOStringLocal) {
    Date.prototype.toISOStringLocal = function () {
      const d = new Date(+this);
      let offset = d.getTimezoneOffset();
      const sign = offset < 0 ? '+' : '-';
      d.setUTCMinutes(d.getUTCMinutes() - d.getTimezoneOffset());
      offset = ('0' + ((offset / 60) | 0)).slice(-2) + ('0' + (offset % 60)).slice(-2);
      return d.toISOString().replace(/Z\s*/i, '') + sign + offset;
    };
  }

  try {
    updateStorage();
    loadSettings();
    changeAllPages();
    if (isPage(/cw3\/(?!(kns|jagd))/)) {
      changeCW3Page();
    } else if (isPage('cw3/kns')) {
      changeKnsPage();
    } else {
      if ((isPage('', true) || isPage('index')) && $('#act_name b').length) {
        changeIndexPage();
      } else if (isPage(/cat(\d+|\/.+)/)) changeCatPage();
      else if (isPage('fae')) changeFaePage();
      else if (isPage('chat')) changeChatPage();
      else if (isPage('ls')) changeLsPage();
      else if (isPage('ideas', true)) changeIdeasPage();
      else if (isPage(/blog(?!sea)/) || isPage('sniff') || isPage('idea')) {
        changeAllBlogsPages();
      } else if (isPage('settings', true)) changeSettingsPage();
    }
  } catch (err) {
    window.console.error('Варомод:', err);
  }

  function updateStorage() {
    // 2.0
    Object.keys(window.localStorage).forEach(function (key) {
      const savedNotes = JSON.parse(window.localStorage.getItem('cwmod_notes') || '{}');
      if (/^cwm_settings/.test(key)) delete window.localStorage[key];
      if (/^cwm_note/.test(key)) {
        const catId = getNumber(key);
        savedNotes[catId] = window.localStorage[key];
        saveData('notes', savedNotes);
        delete window.localStorage[key];
      }
      if (key === 'cwm_saved_chat') {
        saveData('saved_chat', window.localStorage[key]);
        delete window.localStorage[key];
      }
    });
  }

  function changeAllPages() {
    const white = $('body > span').first();
    if (white.length) {
      white.children('a').css('color', '');
      white.css('background-color', $('#site_table').css('background-color'));
    }

    const footer = $('#footer');
    if (footer.length) {
      const oldFooter = footer.html().split('<br>©');
      footer.html(oldFooter[0] + ` | <a target="_blank" href="/settings#cwmod">Настройки</a><br>©` + oldFooter[1]);
    }

    let css = `
#cwmod-popup-wrap {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
#cwmod-popup {
  display: grid;
  grid-gap: 1em;
  max-height: 50vh;
  width: 300px;
  padding: 1em;
  background: white;
  color: black;
  border: 1px solid black;
}
.cwmod-popup-btn:hover { text-decoration: none; }
.cwmod-popup-btn { display: none; text-align: center; color: #000033; text-decoration: underline; cursor: pointer; }
#cwmod-popup-reload { grid-area: reload; }
#cwmod-popup-cancel { grid-area: cancel; }
#cwmod-popup-hide { grid-area: hide; }
#cwmod-popup-text { grid-area: text; }
#cwmod-popup-text a { color: #123; }
#cwmod-popup-text a:hover { color: #246; }

.reload #cwmod-popup { grid-template-areas: 'text text' 'reload cancel'; }
.reload #cwmod-popup-reload, .reload #cwmod-popup-cancel { display: block; }
.alert #cwmod-popup { grid-template-areas: 'text' 'hide'; }
.alert #cwmod-popup-hide { display: block; }

.usn { user-select: none; }
.fs0 { font-size: 0; }
`;
    addCSS(css);

    body.append(`
<div class="reload" id="cwmod-popup-wrap">
  <div id="cwmod-popup">
    <div id="cwmod-popup-text"></div>
    <div class="cwmod-popup-btn" id="cwmod-popup-reload" onclick="window.location.reload()">Обновить</div>
    <div class="cwmod-popup-btn" id="cwmod-popup-cancel" onclick="$('#cwmod-popup-wrap').hide()">Позже</div>
    <div class="cwmod-popup-btn" id="cwmod-popup-hide" onclick="$('#cwmod-popup-wrap').hide()">Скрыть</div>
  </div>
</div>
`);

    $(window).on('storage', function (e) {
      if (e.originalEvent.key === 'cwmod_settings') {
        const oldValue = JSON.parse(e.originalEvent.oldValue);
        const newValue = JSON.parse(e.originalEvent.newValue);
        Object.keys(newValue).forEach(function (key) {
          if (thisPageSettings.indexOf(key) !== -1) {
            if (oldValue[key] !== newValue[key]) {
              let text =
                'Настройки Варомода для этой страницы были изменены. Обновить страницу прямо сейчас, чтобы применить их?';
              showCwmodPopup('reload', text);
            }
          }
        });
      }
    });

    body.on('click', 'summary.cwmod-settings', function () {
      const th = $(this);
      const key = th.data('conf');
      setSettings(key, !th.parent().is('[open]'));
    });

    body.on('change', 'select.cwmod-settings', function () {
      const th = $(this);
      const key = th.data('conf');
      let val = th.val();
      if (/^\d+$/.test(val)) val = Number(val);
      setSettings(key, val);

      $(`[data-show="${key}"]`).each(function () {
        let cond = $(this).data('cond');
        const invert = /^!/.test(cond);
        cond = cond.replace(/^!/, '');
        if (invert !== (cond === val)) $(this).show();
        else $(this).hide();
      });
    });

    body.on('change', 'input.cwmod-settings', function () {
      const th = $(this);
      const key = th.data('conf');
      const type = th.attr('type');
      let val;
      if (type === 'checkbox') {
        val = th.is(':checked');
        setSettings(key, val);
        if (val) $(`[data-show="${key}"]`).show();
        else $(`[data-show="${key}"]`).hide();
      } else if (type === 'range') {
        val = th.val();
        setSettings(key, val);
      }
    });

    body.on('input', 'input.cwmod-settings', function () {
      const th = $(this);
      const key = th.data('conf');
      const type = th.attr('type');
      if (type === 'number') {
        if (th.val()) setSettings(key, Number(th.val()));
      } else if (type === 'text') {
        if (th.val()) setSettings(key, th.val());
      }
    });

    body.on('click', '.cwmod-settings-set-default', function (e) {
      e.preventDefault();
      const th = $(this);
      const key = th.data('rel');
      const val = DEFAULTS[key];
      const input = $(`[data-conf="${key}"]`);
      if (input.attr('type') === 'text') input.val(val);
      setSettings(key, val);
    });

    body.on('click', '.cwmod-settings-test-sound', function (e) {
      e.preventDefault();
      const th = $(this);
      const audio = new Audio();
      const volume = $(`[data-conf="${th.data('volume')}"]`).val();
      audio.src = getSettings(th.data('audio'));
      audio.volume = volume;
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    });

    if (getSettings(CONF_CAT_ENABLE_NOTES)) {
      body.on('mouseenter', 'a:not(.headers)', function () {
        const th = $(this);
        const href = th.attr('href');
        if (!/cat\d+/.test(href)) return;
        const catId = /\d+/.exec(href)[0];
        const note = getNoteByCatId(catId);
        if (note) th.attr('title', note);
      });
    }
    body.on('mouseenter', '.headers', function () {
      $(this).attr('title', 'Это раскрывающийся блок');
    });
  }

  function showCwmodPopup(type, text) {
    $('#cwmod-popup-wrap').removeClass().addClass(type);
    $('#cwmod-popup-text').html(text);
    if ($('#cwmod-popup-wrap').css('display') === 'none') {
      $('#cwmod-popup-wrap').css('display', 'flex');
    }
  }

  function moonCalc() {
    if (!$('#info').length) return;
    addCSS(`.calc-error { color: darkred; }`);
    $('#info').after('<div id="calc-age"></div>');
    const infoObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function () {
        const infoText = $('#info').text();
        if (!infoText.match('Дата')) {
          $('#calc-age').empty();
          return;
        }

        const birthDateString = infoText.match(/\d{4}-\d\d-\d\d \d\d:\d\d/)[0].replace(' ', 'T');
        const nowDateString = dateToString(new Date());
        const moonsNow = getMoonsFromDate(birthDateString, nowDateString);
        let bornWord;
        const sex = $('[src^="/avatar/"]').first()[0].style.borderColor;
        const isRegDate = /регистрац/.test(infoText) && $('#age2_icon').length;
        switch (sex) {
          case 'pink':
            bornWord = isRegDate ? 'Зарегистрировалась' : 'Родилась';
            break;
          case 'blue':
            bornWord = isRegDate ? 'Зарегистрировался' : 'Родилcя';
            break;
          default:
            bornWord = isRegDate ? 'Зарегистрировалось' : 'Родилoсь';
        }
        const catTime = timestampToCatTime(Date.parse(birthDateString));
        const catTimeString = `${catTime.day} ${months[catTime.month]} ${catTime.year} года в ${leadingZero(
          catTime.hour
        )}:${leadingZero(catTime.minute)}`;
        $('#calc-age').html(`
<p><b>Калькулятор возраста</b></p>
<label>Дата и время: <input type="datetime-local" id="calc-date" min="${birthDateString}" value="${nowDateString}" max="9999-31-12T23:59"></label> <span id="calc-error-date" class="calc-error"></span>
<br><label>Возраст: <input type="number" id="calc-moons" min="0" step="0.1" value=${moonsNow} style="width: 60px"></label> <span id="moon-word">лун</span> <span id="calc-error-moons" class="calc-error"></span>
<br>${bornWord} ${catTimeString} по кошачьему времени.
<br><br>
`);

        updateMoonWord(moonsNow);

        $('#calc-date').on('input', function () {
          $('#calc-error-date').empty();
          const dateString = $('#calc-date').val();
          const date = Date.parse(dateString);
          if (isNaN(date)) {
            if (dateString.length) $('#calc-error-date').html('Ошибка!');
            return;
          }
          if (date < Date.parse(birthDateString)) {
            $('#calc-error-date').html('Ошибка!');
            return;
          }
          const moons = getMoonsFromDate(birthDateString, dateString);
          $('#calc-moons').val(moons);
          updateMoonWord(moons);
        });

        $('#calc-moons').on('input', function () {
          $('#calc-error-moons').empty();
          const moons = Number($('#calc-moons').val());
          if (moons < 0 || isNaN(moons)) {
            $('#calc-error-moons').html('Ошибка!');
            return;
          }
          $('#calc-date').val(getDateStringFromMoons(birthDateString, moons));
          updateMoonWord(moons);
        });
      });
    });
    infoObserver.observe(document.querySelector('#info'), { childList: true });
  }

  function updateMoonWord(moons) {
    $('#moon-word').html(declOfNum(moons, ['луна', 'луны', 'лун']));
  }

  function getMoonsFromDate(birthDateString, dateString) {
    const birthday = Date.parse(birthDateString);
    const date = Date.parse(dateString);
    const moons = Math.floor((convertTime('ms d', date - birthday) / 4) * 10) / 10;
    return moons;
  }

  function getDateStringFromMoons(birthDateString, moons) {
    const birthday = Date.parse(birthDateString);
    const age = Math.round(convertTime('d ms', moons * 4));
    return dateToString(birthday + age);
  }

  function changeAllBlogsPages() {
    addBBcode(1);

    let css = `
#blogs-reload > a, .poll-hasAnswered1 { color: black; }
.tags-list { margin: 0; }
.tags-list > li { list-style-type: circle; }
#add-tags p, #add-tags li { line-height: 1.4em; }
.add-tag {
  padding: 1px 5px;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  border-radius: 1rem;
  white-space: nowrap;
  cursor: pointer;
}
.add-tag::before { content: '+ '; color: #888; }
#search > p { margin-top: 0.5em; }
.comment-answer, .comment-cite { display: inline-block; margin-top: 5px; }
  `;
    if (getSettings(CONF_BLOGS_CITE_BUTTON_HIDE)) {
      css += `.comment-cite-wrap { display: none; }`;
    }

    if (isPage('blog')) {
      if (getSettings(CONF_BLOGS_IMAGES_MAX_WIDTH)) {
        css += `img {max-width: ${getSettings(CONF_BLOGS_IMAGES_MAX_WIDTH)}px}`;
      }
    }
    if (isPage('sniff')) {
      if (getSettings(CONF_SNIFF_IMAGES_MAX_WIDTH)) {
        css += `img {max-width: ${getSettings(CONF_SNIFF_IMAGES_MAX_WIDTH)}px}`;
      }
    }

    if (getSettings(CONF_BLOGS_AVATARS)) {
      const width = getSettings(CONF_BLOGS_AVATARS_SIZE);
      const border = getSettings(CONF_BLOGS_AVATARS_BORDER);
      const size = getSettings(CONF_BLOGS_AVATARS_NO_CROP) ? 'contain' : 'cover';
      css += `
.comment-avatar {
  grid-area: avatar;
  display: block;
  width: ${width}px;
  height: ${width}px;
  ${border ? 'border: 1px solid black;' : ''}
  background-size: ${size};
  background-repeat: no-repeat;
  background-position: center;
}
.comment-info { grid-area: info; }
.comment-info + p { grid-area: p; }
.comment-text { grid-area: text; }
.comment-answer-buttons { grid-area: btns; }
.view-comment {
  display: grid;
  grid-template-areas: 'avatar info' 'avatar p' 'avatar text' 'btns btns';
  grid-template-columns: ${width + 2 * border}px auto;/*я пожалею об этом*/
  grid-column-gap: 10px;
}
`;
    }
    addCSS(css);
    changeMainPage();
    changeViewPage();

    if (isPage('blogs?creation') || isPage('sniff?creation')) {
      changeCreationPage();
    }

    const viewObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function () {
        if ($('#view').css('display') === 'none') {
          hideCommentPreview();
        }
      });
    });

    const creationObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function () {
        if ($('#creation').css('display') === 'none') {
          window.removeEventListener('beforeunload', beforeunload);
        } else {
          changeCreationPage();
        }
      });
    });

    viewObserver.observe($('#view')[0], { attributes: true });
    creationObserver.observe($('#creation')[0], { attributes: true });
  }

  function changeMainPage() {
    $('#search > form > input[type="text"]').attr('placeholder', 'Поиск по ключевым словам');
    $('#search').append(
      `<p><input id="search-tag" type="text" size="35" placeholder="Поиск по тегу"> <input id="search-ok" type="button" value="Искать"></p>`
    );

    $('#search-ok').click(function () {
      searchByTag($('#search-tag').val());
    });

    $('#search-tag').keypress(function (e) {
      if (e.which == 13) {
        searchByTag($('#search-tag').val());
        return false;
      }
    });
  }

  function changeViewPage() {
    const p = $('#send_comment_form > p:last-child');
    p.prepend(`<input type="button" id="comment-preview" value="Предпросмотр"> `);

    $('#send_comment_form').after(`
<p id="comment-preview-hide" style="display: none; margin: 0.5em 0;"><a href="#">Скрыть предпросмотр</a></p>
<div id="comment-preview-div" style="display :none"></div>
    `);

    const WS = io.connect(window.location.origin, {
      path: '/ws/blogs/socket.io',
      reconnectionDelay: 10000,
      reconnectionDelayMax: 20000,
    });

    WS.on('creation preview', function (data) {
      $('#comment-preview-div').html(data).show();
      $('#comment-preview-hide').show();
    });

    $('#comment-preview').click(function () {
      WS.emit('creation preview', $('#comment').val());
    });

    $('#send_comment_form [type="submit"]').click(hideCommentPreview);

    $('#comment-preview-hide').click(function (e) {
      e.preventDefault();
      hideCommentPreview();
    });

    if (getSettings(CONF_BLOGS_COMMENTS_SMILES)) {
      p.append(`
<img src="smile/1.png" class="sticker" data-code=":sm1:">
<img src="smile/2.png" class="sticker" data-code=":sm2:">
<img src="smile/3.png" class="sticker" data-code=":sm3:">
<img src="smile/4.png" class="sticker" data-code=":sm4:">
<img src="smile/5.png" class="sticker" data-code=":sm5:">
<img src="smile/6.png" class="sticker" data-code=":sm6:">
<img src="smile/7.png" class="sticker" data-code=":sm7:">
<img src="smile/8.png" class="sticker" data-code=":sm8:">
<img src="smile/9.png" class="sticker" data-code=":sm9:">
<img src="smile/10.png" class="sticker" data-code=":sm10:">
`);
    }

    if ($('#comment').length) {
      const commentObserver = new MutationObserver(function (mutations) {
        mutations.forEach(changeComments);
      });
      commentObserver.observe(document.querySelector('#view_comments'), { childList: true });
    }

    let selectionInfo = {};

    $('#view_comments').on('mouseup touchend', function () {
      if (getSettings(CONF_BLOGS_CITE_BUTTON_HIDE)) $('.comment-cite-wrap').hide();
      const sel = window.getSelection();

      if (!sel.isCollapsed && sel.anchorNode && sel.focusNode) {
        if (sel.anchorNode.parentElement.classList.contains('.comment-cite')) return;
        else selectionInfo = {};

        const anchor = {
          elem: sel.anchorNode,
          isComment: false,
          id: 0,
        };
        const focus = {
          elem: sel.focusNode,
          isComment: false,
          id: 0,
        };

        while ((anchor.elem = anchor.elem.parentElement)) {
          if (anchor.elem.classList.contains('comment-text')) anchor.isComment = true;
          if (anchor.elem.dataset.id) {
            anchor.id = anchor.elem.dataset.id;
            break;
          }
        }

        while ((focus.elem = focus.elem.parentElement)) {
          if (focus.elem.classList.contains('comment-text')) focus.isComment = true;
          if (focus.elem.dataset.id) {
            focus.id = focus.elem.dataset.id;
            break;
          }
        }

        if (anchor.isComment && focus.isComment && anchor.id === focus.id) {
          selectionInfo.text = sel.toString();
          selectionInfo.id = parseInt(anchor.id, 10);
          $(`[data-id="${selectionInfo.id}"] .comment-cite-wrap`).show();
        }
      }
    });

    $('#view_comments').on('click', '.comment-answer', function (e) {
      e.preventDefault();
      answerComment($(this).parent().parent(), false);
    });

    $('#view_comments').on('click', '.comment-cite', function (e) {
      e.preventDefault();
      answerComment($(this).parent().parent().parent(), true, selectionInfo);
    });
  }

  function hideCommentPreview() {
    $('#comment-preview-hide').hide();
    $('#comment-preview-div').empty().hide();
  }

  function changeComments() {
    addAnswerButtons();
    if (getSettings(CONF_BLOGS_AVATARS)) {
      addCommentAvatars();
    }
  }

  function addCommentAvatars() {
    $('.view-comment:not(.has-avatar)').each(function () {
      $(this).prepend('<div class="comment-avatar"></div>');
      const commentId = $(this).data('id');
      const avatarSelector = `.view-comment[data-id="${commentId}"] > .comment-avatar`;
      const avatarDiv = $(avatarSelector);
      const author = $(this).children('.comment-info').children('.author');
      const catId = author.length ? getNumber(author.attr('href')) : 0;
      const storedAvatar = window.sessionStorage.getItem('avatar' + catId);

      if (catId === 0) {
        avatarDiv.css('background-image', `${avatarDomain}/avatar/0.jpg`);
      } else if (storedAvatar) {
        avatarDiv.css('background-image', `url(${storedAvatar})`);
      } else {
        setAvatar(catId, avatarSelector);
      }

      $(this).addClass('has-avatar');
    });
  }

  function addAnswerButtons() {
    const answerButton = isDesktop ? 'Ответить' : '🗨';
    const citeButton = isDesktop ? 'Цитировать' : '💬';
    const addAnswer = getSettings(CONF_BLOGS_ANSWER_BUTTON);
    const addCite = getSettings(CONF_BLOGS_CITE_BUTTON);

    $('.view-comment:not(.has-buttons)').each(function () {
      let html = `<p class="comment-answer-buttons">`;
      const notMyComment = $(this).children('.comment-info').children('[data-candelete="0"]').css('display') !== 'none';
      if (addAnswer && notMyComment) {
        html += `<a class="comment-answer" href="#">${answerButton}</a>`;
      }
      if (addCite) {
        html += '<span class="comment-cite-wrap">';
        if (addAnswer && notMyComment) html += ' | ';
        html += `<a class="comment-cite" href="#">${citeButton}</a></span>`;
      }
      $(this).append(html).addClass('has-buttons');
    });
  }

  function answerComment(comment, cite, selectionInfo) {
    const commentInfo = comment.children('.comment-info');
    const num = commentInfo.children('b').children('.num').text();

    let author;
    if (commentInfo.children('.author').length)
      author = '[link' + getNumber(commentInfo.children('.author').attr('href')) + ']';
    else author = '[b][code]' + commentInfo.children('span').first().text() + '[/code][/b]';

    let quote;

    if (cite) {
      let text;
      if (selectionInfo.id === comment.data('id')) text = selectionInfo.text;
      else text = bbencode(comment.children('.comment-text').children('.parsed').html());

      const date = findDate(commentInfo.html());

      quote = `[table][tr][td][size=10][i]Цитата:[/i] [b]#${num}[/b] ${date} @ ${author}[/size][/td][/tr][tr][td][table=0][tr][td]  [/td][td]${text}[/td][/tr][/table][/td][/tr][/table]`;
    } else {
      quote = `${author} (#${num}), `;
    }

    const textarea = $('#comment');
    textarea.val(textarea.val() + quote);
    textarea.focus();
  }

  function changeCreationPage() {
    if (getSettings(CONF_CREATION_SAVE_ALERT)) addSaveAlert();

    if (isPage('blogs?creation', true) || isPage('sniff?creation', true)) {
      const blogsTags = `
<details id="add-tags"${getSettings(CONF_BLOGS_TAGS_OPEN) ? ' open' : ''}>
<summary class="cwmod-settings" data-conf="${CONF_BLOGS_TAGS_OPEN}"><b>Добавить теги</b></summary>
<p>
  <span class="add-tag">информация</span>
  <span class="add-tag">новичкам</span>
  <span class="add-tag">племенной блог</span>
</p>
<p>
  <span class="add-tag">поздравление</span>
  <span class="add-tag">день рождения</span>
  <span class="add-tag">годовщина</span>
  <span class="add-tag">самопоздравление</span>
</p>
<p>
  <span class="add-tag">писательское творчество</span>
  <span class="add-tag">стихотворения</span>
  <span class="add-tag">рисунки</span>
  <span class="add-tag">фотографии</span>
  <span class="add-tag">рукоделие</span>
  <span class="add-tag">журнал</span>
</p>
<p>
  <span class="add-tag">неграмотно</span>
  <span class="add-tag">мало</span>
  <span class="add-tag">скопировано</span>
  <span class="add-tag">опасно для глаз</span>
</p>
<p><span class="add-tag">сходка</span></p>
<p><span class="add-tag">конкурс</span></p>
</details>
`;

      const sniffTags = `
<details id="add-tags"${getSettings(CONF_SNIFF_TAGS1_OPEN) ? ' open' : ''}>
<summary class="cwmod-settings" data-conf="${CONF_SNIFF_TAGS1_OPEN}"><b>Добавить теги</b></summary>
<p><small>Основано на блоге <a href="/blog331589">Ликбез</a>. Инструкция по выбору тегов там, а это кнопки для тех, кому лень писать их руками.</small></p>
<p><span class="add-tag">изображение</span></p>
<ul class="tags-list">
  <li><span class="add-tag">скриншот</span> <span class="add-tag">достижение</span> <span class="add-tag">максимальное достижение</span> <span class="add-tag">звуки в Игровой</span> <span class="add-tag">скриншот Игровой</span> <span class="add-tag">скриншот кота</span> <span class="add-tag">скриншот профиля</span></li>
  <li><span class="add-tag">фотография</span> <span class="add-tag">фотография автора</span> <span class="add-tag">фотография питомца</span> <span class="add-tag">фотография природы</span></li>
  <li><span class="add-tag">действие</span> <span class="add-tag">дизайн</span> <span class="add-tag">запах</span> <span class="add-tag">локация</span> <span class="add-tag">медалька</span> <span class="add-tag">мем</span> <span class="add-tag">небо</span> <span class="add-tag">предмет</span> <span class="add-tag">рисунок</span></li>
</ul>
<p><span class="add-tag">Поднюхано</span> <span class="add-tag">Замышеголовили</span></p>
<ul class="tags-list">
  <li><span class="add-tag">бугурт</span> <span class="add-tag">искусство</span> <span class="add-tag">Игровая</span> <span class="add-tag">критика</span> <span class="add-tag">милота</span> <span class="add-tag">обновление</span> <span class="add-tag">племенные новости</span> <span class="add-tag">творчество</span> <span class="add-tag">точка зрения</span></li>
</ul>
<p><span class="add-tag">Флудильня</span></p>
<ul class="tags-list">
  <li><span class="add-tag">кроли</span> <span class="add-tag">локации за кроли</span> <span class="add-tag">о себе за кроли</span> <span class="add-tag">предметы за кроли</span> <span class="add-tag">рисунки за кроли</span> <span class="add-tag">услуги за кроли</span></li>
  <li><span class="add-tag">пыль</span> <span class="add-tag">предметы за пыль</span> <span class="add-tag">рисунки за пыль</span> <span class="add-tag">услуги за пыль</span></li>
  <li><span class="add-tag">рисунки за деньги</span></li>
  <li><span class="add-tag">ролевая</span> <span class="add-tag">приглашение в ролевую</span></li>
  <li><span class="add-tag">72</span> <span class="add-tag">адопт</span> <span class="add-tag">аукцион</span> <span class="add-tag">битва окрасов</span> <span class="add-tag">бугурт</span> <span class="add-tag">варомявы</span> <span class="add-tag">выбор племени</span> <span class="add-tag">гиф</span> <span class="add-tag">Голодные игры</span> <span class="add-tag">желание</span> <span class="add-tag">игра</span> <span class="add-tag">Игровая</span> <span class="add-tag">имя</span> <span class="add-tag">карта</span> <span class="add-tag">квест</span> <span class="add-tag">квест-опрос</span> <span class="add-tag">клон</span> <span class="add-tag">комикс</span> <span class="add-tag">лотерея</span> <span class="add-tag">обмен</span> <span class="add-tag">обмен предметов</span> <span class="add-tag">окрас</span> <span class="add-tag">покраска лайнов</span> <span class="add-tag">рабство</span> <span class="add-tag">симулятор</span> <span class="add-tag">сторонняя игра</span> <span class="add-tag">халява</span></li>
</ul>
<p>Общие теги:</p>
<ul class="tags-list">
  <li><span class="add-tag">реальность</span> <span class="add-tag">учёба</span> <span class="add-tag">школа</span> <span class="add-tag">сон</span> <span class="add-tag">семья</span></li>
  <li><span class="add-tag">поиск</span> <span class="add-tag">поиск друзей</span> <span class="add-tag">поиск кота</span> <span class="add-tag">поиск напарника</span> <span class="add-tag">поиск пары</span> <span class="add-tag">поиск семьи</span> <span class="add-tag">поиск художника</span></li>
  <li><span class="add-tag">вопрос</span> <span class="add-tag">опрос</span> <span class="add-tag">помощь</span></li>
</ul>
<details${getSettings(CONF_SNIFF_TAGS2_OPEN) ? ' open' : ''}>
<summary class="cwmod-settings" data-conf="${CONF_SNIFF_TAGS2_OPEN}"><b>Теги вселенных и фракций</b></summary>
<p>Мёртвые:
  <span class="add-tag">Звёздное племя</span>
  <span class="add-tag">Сумрачный лес</span>
  <span class="add-tag">Душевая</span>
</p>
<p>Озёрная вселенная:
  <span class="add-tag">Грозовое племя</span>
  <span class="add-tag">племя Ветра</span>
  <span class="add-tag">Речное племя</span>
  <span class="add-tag">племя Теней</span>
  <span class="add-tag">клан Падающей Воды</span>
  <span class="add-tag">Северный клан</span>
  <span class="add-tag">Домашние</span>
  <span class="add-tag">одиночки ОВ</span>
  <span class="add-tag">Озёрная вселенная</span>
</p>
<p>Морская вселенная:
  <span class="add-tag">Морское племя</span>
  <span class="add-tag">племя Солнца</span>
  <span class="add-tag">племя Луны</span>
  <span class="add-tag">одиночки МВ</span>
  <span class="add-tag">Морская вселенная</span>
</p>
<p>Вселенная творцов:
  <span class="add-tag">племя Неразгаданных Тайн</span>
  <span class="add-tag">Крылатое племя</span>
  <span class="add-tag">Сплочённый Союз Свободных Республик</span>
  <span class="add-tag">клан Ледяного Дождя</span>
  <span class="add-tag">Эльфийские земли</span>
  <span class="add-tag">Чернолесье</span>
  <span class="add-tag">одиночки ВТ</span>
  <span class="add-tag">Вселенная творцов</span>
</p>
</details>
</details>
`;
      const tagsInput = $('#creation-tags');
      if (!$('#add-tags').length) {
        if (isPage('blogs')) tagsInput.parent().after(blogsTags);
        else if (isPage('sniff')) tagsInput.parent().after(sniffTags);

        $('.add-tag').click(function () {
          let tags = tagsInput.val();
          if (tags) tags += ', ';
          tags += $(this).text();
          tagsInput.val(tags);
          tagsInput.focus();
        });
      }

      //Сохранение последнего блога/поста
      const creationInput = $('#creation-text');
      if (creationInput.length) {
        const key = isPage('blogs') ? 'cwm_saved_blog' : 'cwm_saved_sniff';
        const oldText = window.localStorage.getItem(key);
        if (oldText && !creationInput.val()) creationInput.val(oldText);
        creationInput.on('input', function () {
          window.localStorage.setItem(key, creationInput.val());
        });
      }
    }
  }

  function searchByTag(tag) {
    window.location.href = window.location.href.split('?')[0] + '?tag=' + tag;
  }

  function changeCatPage() {
    addCSS(`#info { color: black; } #age_icon, #age2_icon, #act_icon, img[src^="medal"] { cursor: pointer; }`);
    moonCalc();

    if ($('[src="img/icon_kraft.png"]').length) {
      if (getSettings(CONF_CAT_ADD_KRAFT_NUMBER)) {
        const kraftArr = [
          'блоха',
          'котёночек',
          'задира',
          'гроза детской',
          'страх барсуков',
          'победитель псов',
          'защитник племени',
          'великий воин',
          'достоин Львиного племени',
          'идеальная',
        ];
        const b = $('[src="img/icon_kraft.png"]').parent().siblings().children('b');
        b.append(' (' + kraftArr.indexOf(b.text()) + ')');
      }
    }

    if (getSettings(CONF_CAT_ENABLE_NOTES)) {
      let p, catId;
      if (isDesktop) {
        p = $('#branch > p').first();
        catId = p.data('cat');
        $('#branch').prepend(
          `<textarea id="note" placeholder="Заметка об игроке. Её можете видеть только вы" style="float: right; min-width: 100px; width: 250px; max-width: 500px; height: 100px;"></textarea>`
        );
      } else {
        p = $('#site_table > p').first();
        catId = p.data('cat');
        p.append(
          `<textarea id="note" placeholder="Заметка об игроке. Её можете видеть только вы" style="display: block; width: calc(100% - 10px); height: 50px;"></textarea>`
        );
      }

      const oldText = getNoteByCatId(catId);
      const textarea = $('#note');
      if (oldText && !textarea.val()) textarea.val(oldText);

      const savedNotes = JSON.parse(window.localStorage.getItem('cwmod_notes') || '{}');
      textarea.on('input', function () {
        savedNotes[catId] = textarea.val();
        if (!savedNotes[catId]) delete savedNotes[catId];
        saveData('notes', savedNotes);
      });
    }

    const medals = $('img[src^="medal"]');

    if (medals.length) {
      let lastpic = false;
      medals
        .last()
        .after(
          `<div id="infomedal" style="display: none; margin: 5px; padding: 5px; border-radius: 10px; width: 270px; background: rgba(255, 255, 255, 0.3); color: black;"></div>`
        );
      const info = $('#infomedal');

      $.getJSON('https://porch.website/get?file=medals&type=json', function (data) {
        let medalsList = data.data;
        medals.click(function () {
          const picURL = $(this).attr('src');
          const pic = getNumber(picURL);

          if (pic === lastpic) {
            info.hide(200);
            lastpic = '';
          } else {
            if (info.css('display') === 'none') info.show(200);
            lastpic = pic;
            const medalInfo = medalsList[pic];
            if (medalInfo) {
              let status = medalInfo[1];
              let transfer = medalInfo[2];
              let getting = medalInfo[3];
              let whose = medalInfo[4];

              let about = `<br><b>${$(this).attr('alt')}</b>`;
              if (!(status || transfer || getting || whose === 'Сайтовая')) about += '<br><i>Нет информации</i>';
              else {
                about += '<span style="font-size: 0.9em">';
                if (status) {
                  let color;
                  if (status === 'выдаётся') color = 'green';
                  else if (status === 'не выдаётся') color = '#ba0000';
                  else color = 'gray';
                  about += `<br>Статус: <b style="color: ${color}">${status}</b>`;
                }
                if (transfer === 'возможен')
                  about += `<br>Перенос на другого персонажа <b style="color: green">возможен</b>`;
                else if (transfer === 'невозможен')
                  about += `<br>Перенос на другого персонажа <b style="color: #ba0000">невозможен</b>`;
                about += '</span>';

                if (getting) about += `<br><span style="white-space:pre-wrap">${getting}</span>`;

                if (whose === 'Сайтовая') about += `<br><span style="font-size: 0.9em">Это сайтовая медаль.</span>`;
              }
              info.html(`Медаль № ${pic}${about}`);
            } else {
              info.html(`Медаль № ${pic}<br><b>${$(this).attr('alt')}</b><br><i>Нет информации</i>`);
            }
          }
        });
      });
    }
  }

  function changeChatPage() {
    addCSS(
      `.tabName, #confirm_text, .mess_tr[style^="background: rgb(255, 204, 153)"] { color: black; } .mess_tr[style^="background: rgb(255, 204, 153)"] a { color: #003; }`
    );
    addBBcode(1);

    const key = 'cwmod_saved_chat';
    const oldText = window.localStorage.getItem(key);
    if (oldText) $('#mess').html(oldText);
    $('#mess').on('input', function () {
      window.localStorage.setItem(key, $('#mess').html());
    });
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function () {
        if (!$('#mess').html()) window.localStorage.removeItem(key);
      });
    });
    observer.observe(document.querySelector('#mess'), { childList: true });
  }

  function changeCW3Page() {
    const menu = $('.small').first();
    //const isMale = /Мой кот/.test(menu.text());
    const target = getSettings(CONF_CW3_MENU_TARGET_BLANK) ? 'target="_blank"' : '';
    const menuButtons = {};
    menuButtons[CONF_CW3_MENU_ABOUT] = `<a ${target} href="/about">Об игре</a>`;
    //menuButtons[CONF_CW3_MENU_INDEX] = `<a ${target} href="/">${isMale ? 'Мой кот' : 'Моя кошка'}</a>`;
    menuButtons[CONF_CW3_MENU_TOP] = `<a ${target} href="/top">СИ</a>`;
    //menuButtons[CONF_CW3_MENU_CHAT] = `<a ${target} href="/chat">Чат</a><span id="newchat"></span>`;
    //menuButtons[CONF_CW3_MENU_LS] = `<a ${target} href="/ls">ЛС</a><span id="newls"></span>`;
    menuButtons[CONF_CW3_MENU_LS0] = `<a ${target} href="/ls?id=0">Памятка</a>`;
    menuButtons[CONF_CW3_MENU_BLOGS] = `<a ${target} href="/blogs">Блоги</a>`;
    menuButtons[CONF_CW3_MENU_SNIFF] = `<a ${target} href="/sniff">Лента</a>`;
    menuButtons[CONF_CW3_MENU_SETTINGS] = `<a ${target} href="/settings#cwmod">Настройки</a>`;
    menuButtons[CONF_CW3_MENU_MOBILE] = `<a href="/mobile">Сменить версию</a>`;

    Object.keys(menuButtons).forEach(function (key) {
      if (getSettings(key)) {
        menu.append(' | ' + menuButtons[key]);
      }
    });

    let css = '';

    if (getSettings(CONF_CW3_CHAT_QUIET_LOUDER)) {
      css += `.vlm0, .vlm1, .vlm2, .vlm3, .vlm4 {font-size: 12px;}`;
    }

    if (getSettings(CONF_CW3_CHAT_LOUD_QUIETER)) {
      css += `.vlm6, .vlm7, .vlm8, .vlm9, .vlm10 {font-size: 14px;}`;
    }

    if (getSettings(CONF_CW3_LOWER_CATS)) {
      css += `.d, .d div {background-position: left bottom;}`;
    }

    if (getSettings(CONF_CW3_FIGHT_PANEL_HEIGHT)) {
      const height = getSettings(CONF_CW3_FIGHT_PANEL_HEIGHT);
      if (height !== 70) {
        css += `
#fightPanel { height: max-content; }
#fightLog { overflow-y: auto; min-height: 70px; height: unset !important; max-height: ${height}px; }
        `;
      }
    }

    if (getSettings(CONF_CW3_ADD_REALISM)) {
      css += `
        .d {
          background-image: url(https://cw-mod.github.io/cw-mod/resources/cat.png) !important;
          background-size: contain;
        }
        .d > div {
          opacity: 0;
        }`;
    }

    if (getSettings(CONF_CW3_CAGES_BORDERS)) {
      css += `.cage {box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.33), inset -1px -1px 1px rgba(255, 255, 255, 0.33);}`;
    }

    if (getSettings(CONF_CW3_DEAD_OPAQUE)) {
      css += `.cat > div {opacity: 1 !important;}`;
    }

    if (getSettings(CONF_CW3_HIDE_SKY)) {
      css += `#tr_sky {display: none;}`;
    }

    if (getSettings(CONF_CW3_ALWAYS_DAY)) {
      css += `#cages_div {opacity: 1 !important;}`;
    }

    if (getSettings(CONF_CW3_HISTORY_NO_UNDERLINE)) {
      css += `#ist > a {text-decoration: none;}`;
    }

    if (getSettings(CONF_CW3_COMPACT)) {
      css += `
#app { width: 100%; height: 1000px; }
#main_table { width: 100%; max-width: unset; height: 100%; border-collapse: collapse; background: none !important; }
#main_table > tbody { display: grid; grid-row-gap: 5px; grid-template-columns: 1fr auto 1fr; }
#app > span.small { grid-area: links; position: fixed; z-index: 1; left: 5px; top: 5px; }
#tr_chat { grid-area: chat; }
#tr_actions { grid-area: actions; overflow: auto; background: none !important; }
#tr_tos { grid-area: tos; background: none !important; }
#tr_sky { display: none; }
#tr_field { grid-area: field; background: black; }
#tr_mouth { grid-area: mouth; overflow: auto; background: none !important; }
#tr_actions > td, #tr_mouth > td, #info_main > tbody > tr > td { background-color: #ffdead; }
#tr_info { grid-area: info; max-height: 1000px; overflow-x: hidden; overflow-y: auto; }
#info_main { background: none !important; }
#info_main > tbody > tr > td, #tr_mouth > td > *, #tr_actions > td > *, #tr_chat { padding: 5px; }
#block_mess { margin: 0; padding: 8px 0; }
.infos { width: 100%; max-width: max-content; }
#itemList { max-height: 75px; overflow-y: auto; }
#thdey > br { display: none; }
#chat_form { display: grid; grid-row-gap: 5px; margin: 10px 5px 5px 5px; }
.chat_text { width: unset !important; }
#chat_msg { width: auto !important; height: 350px; padding: 2px; }
#volume + b { display: block; font-size: 0.75em; }
#app > p:not(#error) { visibility: hidden; }
#black { visibility: visible; color: white; }
#black::before { content: 'ТБ: '; }
.small { padding: 0 5px; background-color: #ffdead; font-size: 15px; }
#history_block > div { visibility: hidden; }
#location { visibility: visible; position: fixed; right: 15px; top: 5px; z-index: 5; padding: 0 5px; font-weight: bold; font-size: 1.5em; background-color: #ffdead; }
h2 { font-size: 1.2em; }
`;
      const splitInfo = getSettings(CONF_CW3_COMPACT_SPLIT_INFO);
      const sticky = getSettings(CONF_CW3_COMPACT_SPLIT_INFO_STICKY_HEADERS);
      if (isDesktop)
        css += `
#chat_form { grid-template-columns: auto auto; }
#info_main > tbody > tr { display: grid; max-height: 1000px; grid-template-areas: 'parameter' 'history' 'family'; grid-template-rows: ${
          splitInfo ? '252px 1fr 1fr' : 'auto auto auto'
        }; grid-row-gap: 5px; }
#family.infos { grid-area: family; overflow: auto; }
#history.infos { grid-area: history; overflow: auto; }
#parameter.infos { grid-area: parameter; overflow: auto; }
`;
      else
        css += `
#chat_form { grid-template-columns: auto auto auto; }
#info_main > tbody { display: grid; max-height: 1000px; grid-template-areas: 'parameter' 'history' 'family'; grid-template-rows: ${
          splitInfo ? '252px 1fr 1fr' : 'auto auto auto'
        }; grid-row-gap: 5px; }
#info_main > tbody > tr:nth-child(1) { grid-area: parameter; overflow: auto; }
#info_main > tbody > tr:nth-child(2) { grid-area: history; overflow: auto; }
#info_main > tbody > tr:nth-child(3) { grid-area: family; overflow: auto; }
`;
      const hideHeaders = getSettings(CONF_CW3_COMPACT_HIDE_HEADERS);
      if (hideHeaders) {
        css += `
#info_main h2 { visibility: hidden; }
#parameters-alert { visibility: visible; }
`;
      } else if (splitInfo && sticky) {
        css += `#info_main h2 { position: sticky; }`;
      }
      const swap = getSettings(CONF_CW3_COMPACT_SWAP_SIDES);
      const chatup = getSettings(CONF_CW3_COMPACT_CHAT_ON_TOP);
      if (swap && chatup) {
        css += `#main_table > tbody { grid-template-areas: 'info field tos' 'info field chat' 'info field actions' 'info field mouth'; grid-template-rows: 25px 425px 267.5px 267.5px; }`;
      } else if (swap && !chatup) {
        css += `#main_table > tbody { grid-template-areas: 'info field tos' 'info field actions' 'info field mouth' 'info field chat'; grid-template-rows: 25px 267.5px 267.5px 425px; }`;
      } else if (!swap && chatup) {
        css += `#main_table > tbody { grid-template-areas: 'tos field info' 'chat field info' 'actions field info' 'mouth field info'; grid-template-rows: 25px 425px 267.5px 267.5px; }`;
      } else {
        css += `#main_table > tbody { grid-template-areas: 'tos field info' 'actions field info' 'mouth field info' 'chat field info'; grid-template-rows: 25px 267.5px 267.5px 425px; }`;
      }

      if (getSettings(CONF_CW3_COMPACT_ROUND_EDGES)) {
        css += `.small, #tos, #tr_chat, #tr_actions > td, #tr_mouth > td, #location, #tr_field, #parameter, #cages_div { border-radius: 15px; }`;
        if ($('#app').data('mobile') === 1) css += `#info_main > tbody > tr { border-radius: 15px; }`;
        else css += `#family, #history{ border-radius: 15px; }`;
      }
    }

    const styleTemplate = `
#error { background-color: var(--error-bg) !important; color: var(--error-color) !important; }
#main_table { background: var(--main-bg) }
#tr_field { background: black !important; }
hr { border: none; border-bottom: 1px solid var(--hr-color) !important; }
body { background-color: var(--body-bg) !important; color: var(--text-color) !important; }
a, a:hover { color: var(--a-color); }
#tr_chat, #tr_actions, #tr_mouth, #info_main { background: none !important; }
.small, #app > p:not(#error), #info_main > tbody > tr > td, #history_block > div, #tr_mouth > td, #tr_actions > td, #location, #black, #tr_chat { background-color: var(--table-bg) !important; color: var(--text-color) !important; border: none !important; }
.myname { background: var(--myname-bg) !important; color: var(--myname-color) !important; }
input, select { background-color: var(--input-bg) !important; color: var(--input-color) !important; border: 1px solid var(--input-border-color) !important; }
.ui-slider { background: var(--input-bg) !important; border: 1px solid var(--input-border-color) !important; }
.ui-slider .ui-slider-handle { background: var(--handle-bg) !important; border: 1px solid var(--input-border-color) !important; }
.hotkey { background: white !important; }
.move_name, #fightLog, #timer, .hotkey { color: #000 !important; }
`;
    const theme = getSettings(CONF_CW3_THEME);
    const themes = {
      dark_grey: `:root { --table-bg: #222; --error-bg: #3c1e1e; --error-color: #ccc; --main-bg: #222; --hr-color: #282828; --body-bg: #191919; --text-color: #b2b2b2; --a-color: #b2b2b2; --myname-color: black; --myname-bg: #a73; --input-bg: #111; --handle-bg: #383838; --input-color: #aaa; --input-border-color: #282828; }`,
      black_glass: `:root { --table-bg: #000d; --error-bg: #3c1e1e; --error-color: #ccc; --main-bg: none; --hr-color: #000; --body-bg: #4d4e4f; --text-color: #b2b2b2; --a-color: #b2b2b2; --myname-color: black; --myname-bg: #a73; --input-bg: #111; --handle-bg: #333; --input-color: #ccc; --input-border-color: #000; }`,
    };

    if (theme !== 'default') {
      css += themes[theme] + styleTemplate;
    }

    addCSS(css);

    if (getSettings(CONF_CW3_BACKGROUND) !== 'default') {
      const bgSize = getSettings(CONF_CW3_BACKGROUND_SIZE);
      const bgPos = getSettings(CONF_CW3_BACKGROUND_POSITION);
      addCSS(`body { background-size: ${bgSize}; background-position: ${bgPos}; }`);
      if (getSettings(CONF_CW3_BACKGROUND) === 'location') {
        body.css('background-image', $('#cages_div').css('background-image'));
        const cagesDivObserver = new MutationObserver(function (mutations) {
          mutations.forEach(function () {
            body.css('background-image', $('#cages_div').css('background-image'));
          });
        });
        cagesDivObserver.observe($('#cages_div')[0], { attributes: true });

        const pageObserver = new MutationObserver(function (mutations) {
          mutations.forEach(function () {
            if (body.text() === 'Вы открыли новую вкладку с Игровой, поэтому старая (эта) больше не работает.') {
              body.css('background-image', 'none');
              cagesDivObserver.disconnect();
              pageObserver.disconnect();
            }
          });
        });
        pageObserver.observe(document.body, { childList: true });
      } else {
        addCSS(`body { background-image: url(${getSettings(CONF_CW3_BACKGROUND_IMAGE)}); }`);
      }
    }

    if (getSettings(CONF_CW3_WEATHER_SNOW)) {
      const skyObserver = new MutationObserver(function (mutations) {
        let sky = $('#sky').css('background-image').match(/\d+/g)[1];
        let isSnow = false;
        if (sky === '7' || sky === '8') {
          isSnow = true;
          setTimeout(function runSnow() {
            snow();
            if (isSnow) setTimeout(runSnow, 250);
          }, 250);
        }
        mutations.forEach(function () {
          if (!$('#snow').length) body.prepend('<div id="snow"></div>');
          const weatherObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function () {
              sky = $('#sky').css('background-image').match(/\d+/g)[1];
              if ((sky === '7' || sky === '8') && !isSnow) {
                isSnow = true;
                setTimeout(function runSnow() {
                  snow();
                  if (isSnow) setTimeout(runSnow, 250);
                }, 250);
              } else {
                isSnow = false;
              }
            });
          });
          weatherObserver.observe($('#sky')[0], { attributes: true });
          skyObserver.disconnect();
        });
      });
      skyObserver.observe($('#main_table > tbody')[0], { childList: true });
    }

    const cagesObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        const node = mutation.addedNodes[0];
        if (!node) return;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        if (isDesktop && getSettings(CONF_CW3_COMPACT)) {
          if (node.classList.contains('catWithArrow')) {
            let padding = 0;
            $('#cages')
              .children('tbody')
              .children('tr')
              .last()
              .children()
              .each(function () {
                const tooltip = $(this).find('.cat_tooltip');
                if (tooltip.length && tooltip.height() > padding) {
                  padding = tooltip.height();
                }
              });
            padding += 50;
            body.css('padding-bottom', padding + 'px');
          }
        }

        if (getSettings(CONF_CW3_LOWER_CATS) && getSettings(CONF_CW3_LOWER_ARROWS)) {
          let arrow;
          if (node.classList.contains('catWithArrow')) {
            arrow = $(node).children('div').children('.arrow');
          } else if (mutation.target.classList.contains('catWithArrow')) {
            arrow = $(node).children('.arrow');
          } else return;

          if (!arrow.length) return;

          const oldTop = Number(getNumber(arrow.css('top')));
          const catHeight = Number(getNumber(arrow.children('table').css('width')));
          const newTop = oldTop + 150 - catHeight * 1.5;
          arrow.css('top', newTop + 'px');
        }
      });
    });

    $('.cage_items').each(function () {
      cagesObserver.observe(this, { childList: true, subtree: true });
    });

    if (getSettings(CONF_CW3_ACT_END_IN_TITLE) || getSettings(CONF_CW3_ACT_END_ALERT)) {
      const changeTitle = getSettings(CONF_CW3_ACT_END_IN_TITLE);
      const blurOnly = getSettings(CONF_CW3_ACT_END_ALERT_BLUR_ONLY);
      const audio = new Audio();
      audio.src = getSettings(CONF_CW3_ACT_END_ALERT_SOUND);
      audio.volume = getSettings(CONF_CW3_ACT_END_ALERT_VOLUME);
      let isWindowActive = true;

      window.addEventListener('focus', function (event) {
        isWindowActive = true;
        if (blurOnly) {
          audio.pause();
          audio.currentTime = 0;
        }
      });

      window.addEventListener('blur', function (event) {
        isWindowActive = false;
      });

      const deysObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const blockMess = document.querySelector('#block_mess');
          const blockDeys = document.querySelector('#block_deys');

          if (blockMess) {
            const timerRegex = /(?:\d+\s*мин\s*)?\d+\s*с/;
            const timeLeftMatch = blockMess.textContent.match(timerRegex);
            const timeLeft = timeLeftMatch ? timeLeftMatch[0] : 'Игровая / CatWar';

            if (changeTitle) {
              document.title = timeLeft;
            }

            if (getSettings(CONF_CW3_ACT_END_ALERT)) {
              const alertTime = new RegExp('^' + getSettings(CONF_CW3_ACT_END_ALERT_TIME) + ' .?с');
              if (
                alertTime.test(timeLeft) &&
                (!isWindowActive || !blurOnly || $('#cwmod-popup-wrap').css('display') === 'flex')
              ) {
                audio.play();
              }
            }
          } else if (blockDeys) {
            if (changeTitle) {
              document.title = 'Игровая / CatWar';
            }
          }
        });
      });

      const trActions = document.querySelector('#tr_actions');
      if (trActions) {
        const tdElement = trActions.querySelector('td');
        if (tdElement) {
          deysObserver.observe(tdElement, {
            childList: true,
            subtree: true,
            characterData: true,
          });
        }
      }
    }

    const DiseasesLevels = {};
    DiseasesLevels.dirt = ['грязные лапы', 'грязевые пятна', 'клещи', 'блохи'];
    DiseasesLevels.wound = ['царапины', 'лёгкие раны', 'глубокие раны', 'смертельные раны'];
    DiseasesLevels.drown = ['cсадины', 'лёгкие порезы', 'глубокие царапины', 'смертельные травмы'];
    DiseasesLevels.trauma = ['ушибы', 'лёгкие переломы', 'сильные переломы', 'смертельные переломы'];
    let catInfos = [];

    body.on('mouseenter', '.cat', function () {
      const cat = $(this);
      const catEl = cat.find('.d');
      if (!catEl.length) return;
      if (getSettings(CONF_CW3_CAT_INFO)) {
        const html = cat.html();
        const link = cat.find('a').first();
        const catName = link.text();
        const catId = /\d+/.exec(link.attr('href'))[0];
        const sex = /Его запах/.exec(html);

        const catElHtml = catEl.parent().html();
        let height = catEl.css('background-size');
        if (height === '101%') height += ' (надута)';
        const image = /composited\/([\da-f]{16})\.png/.exec(catElHtml)[1];
        let dirt = /dirt\/(\d)/.exec(catElHtml);
        let wound = /wound\/(\d)/.exec(catElHtml);
        let drown = /drown\/(\d)/.exec(catElHtml);
        let trauma = /trauma\/(\d)/.exec(catElHtml);
        wound = wound ? Number(wound[1]) : false;
        dirt = dirt ? Number(dirt[1]) : false;
        drown = drown ? Number(drown[1]) : false;
        trauma = trauma ? Number(trauma[1]) : false;
        const poisoning = /poisoning/.exec(catElHtml);
        const disease = /disease/.exec(catElHtml);
        const beddings = /costume\/295\.png/.exec(catElHtml);

        let text = `<div style="background: bottom right / 45px no-repeat url(composited/${image}.png);">`;
        text += `<a href="/cat${catId}"><b>${catName}</b></a> (ID ${catId})<br><a target="_blank" href="/cw3/composited/${image}.png">Окрас</a>`;
        text += `<br>Рост: ${height}`;
        text += dirt ? `<br>Грязь ${dirt} степени (${DiseasesLevels.dirt[dirt - 1]})` : '';
        text += beddings ? `<br>Убирает подстилки` : '';
        text += wound || drown || trauma || poisoning || disease ? `<br>Болезни:` : `<br>Здоров` + (sex ? '' : 'а');
        text += wound ? `<br>— Раны ${wound} степени (${DiseasesLevels.wound[wound - 1]})` : '';
        text += drown ? `<br>— Травмы от утопления ${drown} степени (${DiseasesLevels.drown[drown - 1]})` : '';
        text += trauma ? `<br>— Переломы ${trauma} степени (${DiseasesLevels.trauma[trauma - 1]})` : '';
        text += poisoning ? `<br>— Отравление` : '';
        text += disease ? `<br>— Насморк` : '';
        text += `</div>`;

        catInfos[catId] = text;
        if (!cat.find('.show-more').length)
          cat.find('.online').before(`<a class="show-more" href="#" data-id="${catId}">Подробнее</a><br>`);
        else cat.find('.show-more').data('id', catId);
      }

      if (getSettings(CONF_CW3_MODIFY_INVENTORY)) {
        let things = {};
        let cats = [];
        let mouth = cat.find('.mouth:not(.new-mouth)').first();
        if (mouth.length) {
          let newMouth = mouth.siblings('.new-mouth');
          if (!newMouth.length) {
            mouth.after('<ol class="mouth new-mouth"></ol>');
            newMouth = mouth.siblings('.new-mouth');
          } else newMouth.show();

          let mouthThings = mouth.children('li');
          mouthThings.each(function () {
            const li = $(this);
            if (li.find('div').length) {
              cats.push(li.html());
            } else {
              let thingId = /\d+/.exec(li.children('img').attr('src'))[0];

              if (li.text() !== '') {
                things[thingId] = Number(li.text().slice(1));
              } else if (things[thingId]) {
                things[thingId]++;
              } else things[thingId] = 1;
            }
          });

          let newMouthHtml = '';
          Object.keys(things).forEach(function (key) {
            let len = things[key] > 1 ? `×${things[key]}` : '';
            newMouthHtml += `<li><img src="things/${key}.png">${len}</li>`;
          });
          cats.forEach(function (cat) {
            newMouthHtml += `<li>${cat}</li>`;
          });
          mouth.hide();
          newMouth.html(newMouthHtml);
        } else cat.find('.new-mouth').hide();
      }
    });

    if (getSettings(CONF_CW3_CAT_INFO)) {
      body.on('click', '.show-more', function (e) {
        e.preventDefault();
        showCwmodPopup('alert', catInfos[$(this).data('id')]);
      });
    }

    if (getSettings(CONF_CW3_PARAMETERS_INFO)) {
      $('#parameter')
        .children('h2')
        .first()
        .append(' <a id="parameters-alert" href="#" title="Параметры подробно">+</a>');
      $('#parameters-alert').click(function () {
        let params = ['Сонливость', 'Голод', 'Жажда', 'Нужда', 'Здоровье', 'Чистота'];
        let text = '<center><b>Параметры</b></center>';
        ['dream', 'hunger', 'thirst', 'need', 'health', 'clean'].forEach(function (param, i) {
          const isDream = param === 'dream',
            isHunger = param === 'hunger',
            isThirst = param === 'thirst',
            isNeed = param === 'need',
            isClean = param === 'clean',
            isHealth = param === 'health';
          text += `<br><b>${params[i]}</b><br>`;

          const barFill = $('#' + param)
            .find('.bar-fill')
            .last();
          let red = parseInt(barFill[0].style.width);

          if (Number.isNaN(red)) text += 'Ошибка, попробуйте снова';
          else if (red === 100) {
            if (isDream && $('.dey[data-id="1"]').length) text += `<span>100 %</span><br>10 c сна`;
            else if (isThirst && $('.dey[data-id="5"]').length) text += `<span>100 %</span><br>До 30 c питья`;
            else if (isNeed && $('.dey[data-id="4"]').length) text += `<span>100 %</span><br>10 c дел в грязном месте`;
            else text += '100 %';
          } else if (red === 0) {
            text += '<span style="color: darkred">0 %</span>';
            if (isDream) text += `<br>${secToTime(100 * 20)} сна или более`;
            if (isThirst) text += `<br>${secToTime(100 * 60 - 30)} питья или более`;
            if (isNeed) text += `<br>${secToTime(100 * 30 - 10)} дел в грязном месте или более`;
          } else {
            let percent = 100 - red;
            if (isHealth || isNeed || isClean) {
              percent = red;
            }
            text += `<span style="color: darkred">${percent}%</span> (${red}px)`;
            if (isDream) {
              const maxTime = red * 20 + 10;
              text += `<br>До ${secToTime(maxTime)} сна`;
            } else if (isHunger) {
              const time = Math.ceil(((100 - percent) * 9) / 100) * 15;
              text += `<br>${secToTime(time)} поглощения пищи`;
            } else if (isThirst) {
              const time = Math.ceil(((100 - percent) * 9) / 100) * 15;
              text += `<br>До ${secToTime(time)} питья`;
            } else if (isNeed) {
              const maxTime = (100 - red) * 30 + 10;
              text += `<br>До ${secToTime(maxTime)} дел в грязном месте`;
            } else if (isClean && red <= 25) {
              text += `<br>Вылизываться ${secToTime(percent * 100)}`;
            } else if (isHealth && red <= 50) {
              text += `<br>Не болейте...`;
            }
          }
        });
        showCwmodPopup('alert', text);
      });
    }
  }

  function snow() {
    const id = Date.now(),
      flake = 'https://cw-mod.github.io/cw-mod/resources/snow_' + Math.ceil(Math.random() * 3) + '.png',
      pos_x = Math.ceil(Math.random() * 98),
      end_x = pos_x + Math.floor(Math.random() * 31) - 15,
      deg = Math.ceil(Math.random() * 358),
      width = Math.ceil(Math.random() * 45) + 5,
      img = `
<img id="snow_${id}" style="
  left: ${pos_x}%;
  top: -10%;
  position: fixed;
  pointer-events: none;
  z-index: 72000;
  transform: rotate(${deg}deg);
  max-width: ${width}px;
" src="${flake}">`,
      timefall = Math.ceil(Math.random() * 12000) + 5000;

    $('#snow').append(img);

    $(`#snow_${id}`).animate(
      {
        top: '120%',
        left: end_x + '%',
      },
      timefall,
      function () {
        $(`#snow_${id}`).empty().remove();
      }
    );
  }

  function changeFaePage() {
    if (getSettings(CONF_FAE_SHOW_NOTES)) {
      const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function () {
          $('.cat_span').each(function () {
            const t = $(this);
            const catId = getNumber(t.children().first().attr('href'));
            const noteText = getNoteByCatId(catId);
            if (noteText) {
              t.append(` <span id="${catId}" class="note" style="font-size: 0.9em"></span>`);
              $('#' + catId).text(noteText);
            }
          });
        });
      });
      observer.observe(document.querySelector('#friendList'), { childList: true });
    }
    if (getSettings(CONF_CAT_ENABLE_NOTES)) {
      $(isDesktop ? '#branch' : '#site_table').append(`<b>Список заметок</b><br>`);
      let html = '';
      const notes = JSON.parse(window.localStorage.getItem('cwmod_notes') || '{}');
      Object.keys(notes).forEach(function (catId) {
        html += `<tr><td>${catId}</td><td id="note-${catId}"></td><td>${notes[catId]}</td></tr>`;
      });
      if (html.length) {
        $(isDesktop ? '#branch' : '#site_table').append(
          `<table><thead><tr><td>ID</td><td>Имя</td><td>Заметка</td></tr></thead><tbody>${html}</tbody></table>`
        );
        Object.keys(notes).forEach((catId) => setCatName(catId, '#note-' + catId));
      } else {
        $(isDesktop ? '#branch' : '#site_table').append(`<i>Нет заметок об игроках</i>`);
      }
    }
  }

  function changeIdeasPage() {
    addCSS(
      `.vote[style="color:#000"] { color: inherit !important; } .idea { color: black; } .idea a, .idea a:hover { color: #005 !important; }`
    );
  }

  function changeIndexPage() {
    let css = `
#act_name b { color: black; }
#info { color: black; background: rgba(255, 255, 255, 0.5); }
#clan_icon, #age_icon, #age2_icon, #act_icon { cursor: pointer; }
#cwmod-grats { width: fit-content; padding: 5px; background: rgba(255, 255, 255, 0.5); border-radius: 10px; }
    `;
    if (getSettings(CONF_INDEX_EDUCATION_HIDE)) {
      css += `#education, #education-show, #education-show + br {display: none !important}`;
    }
    addCSS(css);
    addBBcode();
    const catId = $('[src="img/icon_id.png"]').parent().siblings().children('a').children('b').text();
    activityCalc(catId);
    moonCalc();
    if (getSettings(CONF_INDEX_SAVE_ALERT)) addSaveAlert();
  }

  function activityCalc(catId) {
    const actStages = [
      { name: 'пустое место', fromZero: -5000 },
      { name: 'подлежащий удалению', fromZero: -5000 },
      { name: 'покинувший игру', fromZero: -2000 },
      { name: 'забывший про игру', fromZero: -1000 },
      { name: 'забытый кот', fromZero: -750 },
      { name: 'ужаснейшая', fromZero: -500 },
      { name: 'ужасная', fromZero: -300 },
      { name: 'ухудшающаяся', fromZero: -150 },
      { name: 'отрицательная', fromZero: -50 },
      { name: 'переходная', fromZero: -5 },
      { name: 'положительная', fromZero: 5 },
      { name: 'улучшающаяся', fromZero: 50 },
      { name: 'замечательная', fromZero: 150 },
      { name: 'переход 2 мин 15 с', fromZero: 225 },
      { name: 'замечательнейшая', fromZero: 300 },
      { name: 'переход 2 мин', fromZero: 450 },
      { name: 'любимый кот', fromZero: 500 },
      { name: 'переход 1 мин 45 с', fromZero: 675 },
      { name: 'легенда сайта', fromZero: 750 },
      { name: 'переход 1 мин 30 с', fromZero: 900 },
      { name: 'ходячий миф', fromZero: 1000 },
      { name: 'переход 1 мин 15 с', fromZero: 1125 },
      { name: 'переход 1 мин', fromZero: 1350 },
      { name: 'переход 45 c', fromZero: 1575 },
      { name: 'император Игровой', fromZero: 2000 },
      { name: 'частичка Игровой', fromZero: 5000 },
      { name: 'хранитель Игровой', fromZero: 20000 },
      { name: 'идеальная', fromZero: 75000 },
      { name: 'сверхидеальная', fromZero: 150000 },
    ];

    const sets = JSON.parse(window.localStorage.getItem('cwmod_act') || '{}');

    if (!sets[catId]) {
      sets[catId] = {};
      if (window.localStorage.getItem('cwm_hours') !== null) {
        sets[catId].hours = Number(window.localStorage.getItem('cwm_hours'));
        window.localStorage.removeItem('cwm_hours');
      } else sets[catId].hours = 24;
      sets[catId].opened = true;
    }

    /// до 2.2
    if (sets[catId].actgoal) {
      actStages.forEach(function (stage, i) {
        if (i && Number(sets[catId].actgoal) === stage.fromZero) {
          sets[catId].goal = i;
          delete sets[catId].actgoal;
        }
      });
    }

    function updateHourWord() {
      const hours = sets[catId].hours;
      $('#hour-word').text(declOfNum(hours, ['час', 'часа', 'часов']));
    }

    function actLength(d) {
      const minus = sets[catId].minus || 0;
      if (d <= 14) return 150 - minus;
      else if (d >= 1575) return 45 - minus;
      else return Math.ceil(150 - d / 15) - minus;
    }

    function left(currentActivity, goal, hoursPerDay) {
      const secsPerDay = convertTime('h s', hoursPerDay);
      if (actLength(currentActivity) * 4 + 1 > secsPerDay) {
        return { actions: '∞', time: '∞', date: 'никогда' };
      }

      const actionsWithoutDecr = goal - currentActivity;
      let days = 0;
      let secsToday;

      while (currentActivity < goal) {
        secsToday = 0;
        while (secsToday < secsPerDay) {
          currentActivity++;
          secsToday += actLength(currentActivity);
          if (currentActivity >= goal) break;
        }
        if (currentActivity >= goal) break;
        days++;
        currentActivity -= 4.8;
      }

      const actionsDecr = Math.floor(days * 4.8 + convertTime('s h', secsToday) / 5);
      const time = secsPerDay * days + secsToday;

      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const secsToTomorrow = convertTime('ms s', tomorrow - now);
      if (days === 0 && secsToday > secsToTomorrow) days++;

      const date = new Date(Date.now() + convertTime('d ms', days));

      return {
        actions: actionsWithoutDecr + actionsDecr,
        time: secToTime(time),
        date: date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear(),
      };
    }

    function updateToact() {
      if (progress.stage === actStages.length - 1) {
        $('#toact').hide();
        return;
      }
      const goal = Number($('#act-list').val());
      const result = left(progress.doneFromZero, actStages[goal].fromZero, sets[catId].hours);
      $('#toact > ul').html(`
<li>${result.actions} ${declOfNum(result.actions, ['переход', 'перехода', 'переходов'])} (${result.time})</li>
<li>будет достигнута ${result.date}</li>
`);
    }

    const act = $('#act_name b').text().split(' (');
    const progress = {};
    actStages.forEach(function (stage, i) {
      if (act[0] === stage.name) {
        progress.doneFromZero = stage.fromZero + Number(act[1].split('/')[0]);
      }
      if (
        (!actStages[i + 1] || actStages[i + 1].fromZero > progress.doneFromZero) &&
        actStages[i].fromZero <= progress.doneFromZero
      ) {
        progress.stage = i;
      }
    });

    const actInfoHTML = `
<details id="calc-act"${sets[catId].opened ? ' open' : ''}>
<summary id="open-calc"><b>Калькулятор активности</b></summary>
<p id="cwmod-grats" style="display:none"></p>
<div id="actlength"><b>Переход</b>: ${secToTime(actLength(progress.doneFromZero))}</div>
<div>Предметы во рту уменьшают мой переход <nobr>на
  <select id="minus">
    <option value="0">0 секунд</option>
    <option value="2">2 секунды</option>
    <option value="4">4 секунды</option>
    <option value="6">6 секунд</option>
  </select></nobr>
</div>
<div>Я качаю активность <input id="hours-per-day" type="number" step="0.25" min="0" max="24"
value="${sets[catId].hours}" style="width: 60px"> <span id="hour-word"></span> в сутки</div>
<div id="toact">
  <b>Цель: <select style="display: inline" id="act-list"></select></b>:
  <ul style="margin: 0.5em"></ul>
</div>
<div>Переход начнёт падать <span id="tofall"></span></div>
</details>
    `;
    $('#info').after(actInfoHTML);

    for (let i = progress.stage + 1; i < actStages.length; i++) {
      $('#act-list').append(`<option value="${i}">${actStages[i].name}</option>`);
    }

    if (sets[catId].goal > progress.stage || sets[catId].noGrats) {
      $(`#act-list > [value="${sets[catId].goal}"]`).prop('selected', true);
    } else if (sets[catId].goal) {
      $(`#cwmod-grats`)
        .html(
          `
Цель <b>«${actStages[sets[catId].goal].name}»</b> достигнута!
<center><img src="/img/stickers/systempaw3/6.png"></center>
<input id="cwmod-grats-hooray" type="button" value="Скрыть">
<br><input id="cwmod-grats-never-show" type="checkbox"> Больше не поздравлять на этом персонаже
`
        )
        .show();
      $('#cwmod-grats-hooray').click(function () {
        $(`#cwmod-grats`).hide(200);
        $(`#cwmod-grats`).hide(200);
        sets[catId].goal = Number($('#act-list').val());
        sets[catId].noGrats = $('#cwmod-grats-never-show').is(':checked');
        saveData('act', sets);
      });
    }

    if (sets[catId].minus) {
      $(`#minus > [value="${sets[catId].minus}"]`).prop('selected', true);
    }

    updateHourWord();
    updateToact();

    if (actLength(progress.doneFromZero) !== 45) {
      $('#tofall').parent().hide();
    } else {
      const timeFall = new Date(Date.now() + (progress.doneFromZero - 1575) * 5 * 3600000);
      $('#tofall').html(timeFall.getDate() + ' ' + months[timeFall.getMonth()] + ' ' + timeFall.getFullYear());
    }

    $('#minus').change(function () {
      sets[catId].minus = $(this).val();
      saveData('act', sets);
      updateToact();
      $('#actlength').html(`<b>Переход</b>: ${secToTime(actLength(progress.doneFromZero))}`);
    });

    $('#act-list').change(function () {
      sets[catId].goal = Number($('#act-list').val());
      saveData('act', sets);
      updateToact();
    });

    $('#hours-per-day').on('input', function () {
      const hours = Number($('#hours-per-day').val());
      if (hours < 0 || hours > 24 || !Number.isInteger(hours * 1000)) {
        $('#hours-per-day').val(sets[catId].hours);
        return;
      }
      sets[catId].hours = hours;
      saveData('act', sets);
      updateHourWord();
      updateToact();
    });

    $('#open-calc').click(function () {
      sets[catId].opened = !$('#calc-act').is('[open]');
      saveData('act', sets);
    });
  }

  function changeKnsPage() {
    if (getSettings(CONF_KNS_SAVE_ALERT)) addSaveAlert();
  }

  function changeLsPage() {
    addCSS(`
.msg_header { font-size: 1.2rem; text-align: center; }
#search, #saved { display: none; }
label { cursor: pointer; }
.msg_deleted { color: darkred; }
.messList { background-color: ${$('#messList').css('background-color')}; color: ${$('#messList').css('color')}; }
.messList a { color: #0000cd; }
    `);
    const enableSaving = getSettings(CONF_LS_ENABLE_SAVING);

    if (enableSaving)
      $('#links').append(` | <a href="ls?3" id="f3">Сохранённые (<span id="saved-number">?</span>)</a>`);
    $('#links').append(` | <a href="ls?search" id="s">Поиск</a>`);

    let html = `
<div id="search">
  <form class="usn" id="search-form">
    <p>
      Найти
      <label><input name="search-folder" type="radio" value="0"> входящие</label>
      <label><input name="search-folder" type="radio" value="1"> отправленные</label>
      <label><input name="search-folder" type="radio" value="2"> непрочитанные</label>
    </p>
`;
    if (enableSaving)
      html += `
    <p>
      <label><input name="search-type" id="search-all" type="checkbox"> во всех ЛС на этом персонаже</label>
      <label><input name="search-type" id="search-saved" type="checkbox"> в сохранённых ЛС</label>
    </p>
`;
    html += `
    <p>
      <input id="search-cat" type="text" placeholder="Имя или ID собеседника">
      <input id="search-text" type="text" placeholder="Текст">
      <input id="search-ok" type="button" value="ОК">
    </p>
  </form>
  <div id="search-list"></div>
</div>
`;
    if (enableSaving) html += '<div id="saved"><div id="saved-list"></div></div>';

    $(isDesktop ? '#branch' : '#site_table').append(html);

    addSearchFunc(enableSaving);

    if (enableSaving) {
      updateSavedLsList();
      $(window).on('storage', function (e) {
        if (e.originalEvent.key === 'cwmod_ls') updateSavedLsList();
      });

      if (isPage('ls?3')) showSavedLsList();
      if (isPage(/^https:\/\/catwar\.(su|net)\/ls\?id=\d+/)) changeMessagePage();

      body.on('click', '.del-saved', function () {
        const lsId = $(this).data('id');
        const subject = $(this).parent().siblings().first().text();
        const catName = $(this).parent().siblings('.cat_name').text();
        if (confirm(`Удалить ЛС «${subject}» от игрока ${catName} из сохранённых?`)) {
          deleteSavedLs(lsId);
          $(this).parent().parent().remove();
        }
      });
    }

    if (isPage('ls?search')) showSearch();
    if (isPage('ls?new')) addBBcode();

    $('a').click(function (e) {
      if ($(this).attr('id') === 'f3') {
        if (e.ctrlKey) return;
        e.preventDefault();
        history.pushState(null, null, `${baseUrl}/ls?3`);
        showSavedLsList();
      } else if ($(this).attr('id') === 's') {
        if (e.ctrlKey) return;
        e.preventDefault();
        history.pushState(null, null, `${baseUrl}/ls?search`);
        showSearch();
      } else {
        hideSavedLsList();
        hideSearch();
      }
    });

    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function () {
        if (enableSaving && isPage('ls?3')) {
          history.pushState(null, null, `${baseUrl}/ls?3`);
          showSavedLsList();
        } else if (isPage('ls?search')) {
          history.pushState(null, null, `${baseUrl}/ls?search`);
          showSearch();
        } else {
          if (enableSaving) hideSavedLsList();
          hideSearch();
        }
        if (isPage('ls?new')) addBBcode();
        if (enableSaving && isPage(/^https:\/\/catwar\.(su|net)\/ls\?id=\d+/)) changeMessagePage();
      });
    });
    observer.observe($('#main')[0], { childList: true });

    body.on('click', '#preview', function () {
      if (isDesktop) {
        $('#preview_div').after(`
<table border="1" style="width: 90%; max-width: 500px;">
  <tbody>
    <tr><td id="preview-subject" colspan="2"></td></tr>
    <tr>
      <td valign="top">
        Отправитель: <span id="preview-sender"></span>
        <br>Сегодня в <span id="preview-date"></span>
        <br>Переписка: <u><big><b>+</b></big></u> …
      </td>
      <td id="preview-text"></td>
    </tr>
  </tbody>
</table>
      `);
      } else {
        $('#preview_div').after(`
<table border="1" style="width: 90%; max-width: 500px;">
  <tbody>
    <tr><td id="preview-subject"></td></tr>
    <tr>
      <td valign="top">
        Отправитель: <span id="preview-sender"></span>
        <br>Сегодня в <span id="preview-date"></span>
        <br>Переписка: <u><big><b>+</b></big></u> …
      </td>
    </tr>
    <tr><td id="preview-text"></td></tr>
  </tbody>
</table>
        `);
      }
      let subject = $('#subject').val().replaceAll('<', '&lt;');
      if (!subject) subject = '( = )';
      $('#preview-subject').html(subject);
      getCurrentUser(function (catId, catName) {
        $('#preview-sender').html(`<a href="cat${catId}">${catName}</a>`);
      });
      const currentDate = new Date();
      $('#preview-date').html(`${leadingZero(currentDate.getHours())}:${leadingZero(currentDate.getMinutes())}`);
      $('#preview-text').html($('#preview_div'));
    });
  }

  function addSearchFunc(enableSaving) {
    const lastSearch = getSettings(CONF_LS_LAST_SEARCH);
    const lastFolder = lastSearch.folder;
    const lastType = enableSaving ? lastSearch.type : 1;

    $(`[name="search-folder"][value="${lastFolder}"]`).prop('checked', true);

    switch (lastType) {
      case 1:
        $('#search-all').prop('checked', true);
        break;
      case 2:
        $('#search-saved').prop('checked', true);
        break;
      case 3:
        $('[name="search-type"]').prop('checked', true);
        break;
      default:
        $('[name="search-type"]').prop('checked', false);
    }

    $('#search-ok').click(searchLs);

    $('[name="search-folder"]').change(function () {
      const folder = parseInt($('[name="search-folder"]:checked').val(), 10);
      lastSearch.folder = folder;
      setSettings(CONF_LS_LAST_SEARCH, lastSearch);
    });

    $('[name="search-type"]').change(function () {
      const searchAll = $('#search-all').is(':checked');
      const searchSaved = $('#search-saved').is(':checked');

      if (searchAll && !searchSaved) lastSearch.type = 1;
      else if (!searchAll && searchSaved) lastSearch.type = 2;
      else if (searchAll && searchSaved) lastSearch.type = 3;
      else lastSearch.type = 0;

      setSettings(CONF_LS_LAST_SEARCH, lastSearch);
    });

    $('#search-cat').keypress(function (e) {
      if (e.which == 13) {
        $('#search-text').focus();
        return false;
      }
    });

    $('#search-text').keypress(function (e) {
      if (e.which == 13) {
        searchLs();
        return false;
      }
    });
  }

  function showSearch() {
    $('.active').removeClass('active');
    $('#s').addClass('active');
    $('#main, #saved').hide();
    $('#search').show();
  }

  function hideSearch() {
    $('#main').show();
    $('#search').hide();
  }

  function showSavedLsList() {
    $('.active').removeClass('active');
    $('#f3').addClass('active');
    $('#main, #search').hide();
    $('#saved').show();
  }

  function hideSavedLsList() {
    $('#main').show();
    $('#saved').hide();
  }

  function changeMessagePage() {
    // if ($('#delete-saved-ls').length) return;
    // if ($('.bbcode').length) addBBcode();
    // ↑ у меня есть некоторые вопросы к себе

    const main = $('#main');

    const lsId = parseInt(window.location.href.split('=')[1], 10);
    const savedLs = getSavedLsById(lsId);
    const btnDelete = `<input id="delete-saved-ls" type="button" value="Удалить" style="float: right">`;

    const isLsOnSever = !(main.html() === 'ЛС не найдено.');

    if ($('#msg_subject').length && lsId) {
      const btnSave = `<input id="savels" type="button" value="Сохранить" style="float: right">`;
      const subjectTd = $('#msg_subject');
      subjectTd.html(`<span id="msg_subject">${subjectTd.html()}</span>${btnSave}`);
      subjectTd.removeAttr('id');
      $('#savels').click(saveLs);

      if (savedLs) {
        const td = $('#msg_table > tbody > tr:last-child > td');
        td.html(td.html() + `<i id="savedate">Сохранено ${savedLs.savedate}</i> ${btnDelete}`);
      }
    } else if (!isLsOnSever && savedLs) {
      insertSavedLs(main, lsId, savedLs, btnDelete);
    }

    body.on('click', '#delete-saved-ls', function () {
      if (isLsOnSever) {
        deleteSavedLs(lsId);
        $('#savedate').remove();
        $('#delete-saved-ls').remove();
      } else if (confirm('Удалить это ЛС из сохранённых?')) {
        deleteSavedLs(lsId);
        main.html('ЛС не найдено.');
      }
    });

    if ($('#msg_login').length) {
      let myId;
      if (savedLs) myId = Number(savedLs.myId);
      else myId = Number(main.data('id'));
      const catId = Number(getNumber($('#msg_login').attr('href')));
      const history = JSON.parse(window.localStorage.getItem('cwmod_ls_history') || '{}');
      if (!history[myId]) {
        history[myId] = {};
      }
      if (!history[myId][catId]) {
        history[myId][catId] = {};
      }
      $('#msg_info > .msg_open').each(function () {
        const id = $(this).data('id');
        const isMy = $(this).text() === '-';
        history[myId][catId][id] = isMy;
      });
      saveData('ls_history', history);
    }
  }

  function insertSavedLs(main, lsId, ls, btnDelete) {
    const info = `
${ls.type ? 'Получатель' : 'Отправитель'}: <span id="msg_login" href="/cat${ls.catId}">${ls.catName}</span>
<br>${ls.date}
<br>Переписка: <span id="msg-history"></span>
`;
    if (isDesktop) {
      main.html(`
<table id="msg_table" border="1">
<tbody>
  <tr><td colspan="2">${escapeHTML(ls.subject)}</td></tr>
  <tr><td id="msg_info" valign="top">${info}</td><td>${ls.text}</td></tr>
  <tr><td colspan="2"><i>${ls.type ? 'Отправитель' : 'Получатель'}: ${ls.myName} [${ls.myId}]<br>Сохранено ${
        ls.savedate
      } ${btnDelete}</i></td></tr>
</tbody>
</table>
`);
    } else {
      main.html(`
<table id="msg_table" border="1">
<tbody>
  <tr><td>${escapeHTML(ls.subject)}</td></tr>
  <tr><td id="msg_info" valign="top">${info}</td></tr>
  <tr><td>${ls.text}</td></tr>
  <tr><td><i>${ls.type ? 'Отправитель' : 'Получатель'}: ${ls.myName} [${ls.myId}]<br>Сохранено ${
        ls.savedate
      } ${btnDelete}</i></td></tr>
</tbody>
</table>
`);
    }

    setCatName(ls.catId, `#msg_login`, ls.catName);
    const history = JSON.parse(window.localStorage.getItem('cwmod_ls_history'))[ls.myId][ls.catId];
    const historyArray = {};
    Object.keys(history).forEach(function (key) {
      const isMy = history[key];
      $('#msg-history').prepend(`<span class="msg_deleted">${isMy ? '-' : '+'}</span> `);
    });
    Object.keys(history).forEach(function (key) {
      const isMy = history[key];
      $.post(
        '/ajax/mess_show',
        {
          id: key,
        },
        function (data) {
          const isSaved = getSavedLsById(key);
          if (isSaved || !data.fail) {
            let lsLink = `<a href="ls?id=${key}" class="msg_open" data-id="${key}">`;
            if (Number(key) === lsId) lsLink += `<big><b>`;
            lsLink += isMy ? '-' : '+';
            if (Number(key) === lsId) lsLink += `</b></big>`;
            if (Number(key) === lsId) lsLink += `</b></big>`;
            lsLink += `</a>`;
            historyArray[key] = lsLink;
          } else {
            historyArray[key] = `<span class="msg_deleted">${isMy ? '-' : '+'}</span>`;
          }
          if (Object.keys(historyArray).length === Object.keys(history).length) {
            $('#msg-history').empty();
            Object.keys(historyArray).forEach(function (k) {
              $('#msg-history').prepend(historyArray[k] + ' ');
            });
          }
        },
        'json'
      );
    });
  }

  function searchLs() {
    const folder = parseInt($('[name="search-folder"]:checked').val(), 10);
    const searchAll = $('#search-all').is(':checked');
    const searchSaved = $('#search-saved').is(':checked');

    if (!searchAll && searchSaved && folder === 2) {
      $('#search-list').html('<img src="/img/stickers/systempaw2/6.png">');
    } else {
      $('#search-list').html(`
<h2>Результаты поиска</h2>
<p>Найдено: <span id="search-number">0</span></p>
<table class="messList">
<tbody id="search-results">
  <tr><th>Тема</th><th>${folder === 1 ? 'Получатель' : 'Отправитель'}</th><th>Дата</th></tr>
</tbody>
</table>
`);

      const cat = $('#search-cat').val();
      let text = $('#search-text').val();
      if (text) {
        text = text.match(/['_\-а-яёa-z0-9$]+/gi);
        text = new RegExp(text.join('|'), 'gi');
      }

      if (searchAll || !searchSaved) searchAllLs(folder, cat, text);
      if (searchSaved || !searchAll) searchSavedLs(folder, cat, text);
    }
  }

  function searchAllLs(type, cat, text) {
    getCatIdByName(cat, function (catId) {
      $.post(
        '/ajax/mess_folder',
        {
          folder: type,
          page: 1,
          del: 0,
        },
        function (data) {
          const column = type ? 'poluch' : 'otpr';
          for (let i = 1; i <= data.page; i++) {
            $.post(
              '/ajax/mess_folder',
              {
                folder: type,
                page: i,
                del: 0,
              },
              function (data) {
                for (let j = 0; j < data.msg.length; j++) {
                  const msg = data.msg[j];
                  const id = msg.id;
                  const html = `
<tr class="${msg.new ? 'msg_read' : 'msg_notRead'}">
  <td><a href="ls?id=${msg.id}" class="msg_open" data-id="${msg.id}">${msg.subject}</a></td>
  <td><a href="cat${msg[column]}">${msg.login}</a></td>
  <td>${msg.time}</td>
</tr>
`;
                  $.post(
                    '/ajax/mess_show',
                    {
                      id: id,
                    },
                    function (data) {
                      if (cat) {
                        if (
                          catId !== msg[column] &&
                          cat !== msg[column] &&
                          cat.toLowerCase() !== msg.login.toLowerCase()
                        )
                          return;
                      }
                      if (text) {
                        if (!data.msg.subject.match(text) && !data.msg.text.replace(/<[^>]+>/g, '').match(text)) return;
                      }
                      $('#search-results').append(html);
                      $('#search-number').html($('#search-results').children().length - 1);
                    },
                    'json'
                  );
                }
              },
              'json'
            );
          }
        },
        'json'
      );
    });
  }

  function searchSavedLs(type, cat, text) {
    const savedLs = JSON.parse(window.localStorage.getItem('cwmod_ls'));
    if (savedLs) {
      getCatIdByName(cat, function (catId) {
        for (let key in savedLs) {
          const ls = savedLs[key];
          if (ls.type !== type) continue;
          if (cat) {
            if (catId !== ls.catId && cat !== ls.catId && cat.toLowerCase() !== ls.catName.toLowerCase()) {
              continue;
            }
          }
          if (text) {
            if (!ls.subject.match(text) && !ls.text.replace(/<[^>]+>/g, '').match(text)) {
              continue;
            }
          }
          $.post(
            '/ajax/mess_show',
            {
              id: key,
            },
            function (data) {
              if (data.fail) {
                const html = `
<tr class="msg_read">
  <td><a href="ls?id=${key}" class="msg_open" data-id="${key}">${escapeHTML(ls.subject)}</a></td>
  <td class="search-cat-name" data-id="${key}">${ls.catName}</td>
  <td>${ls.savedate}</td>
</tr>
`;
                $('#search-results').append(html);
                $('#search-number').html($('#search-results').children().length - 1);
                setCatName(ls.catId, `.search-cat-name[data-id="${key}"]`, ls.catName);
              }
            },
            'json'
          );
        }
      });
    } else {
      $('#search-results').html('Нет сохранённых сообщений');
    }
  }

  function updateSavedLsList() {
    const savedLs = JSON.parse(window.localStorage.getItem('cwmod_ls'));
    if (savedLs) {
      $('#saved-list').html(`
<h2>Входящие</h2>
<table class="messList">
  <tbody id="inboxLsList">
    <tr><th>Тема</th><th>Отправитель</th><th>Дата сохранения</th><th>X</th></tr>
  </tbody>
</table>
<h2>Отправленные</h2>
<table class="messList">
  <tbody id="outboxLsList">
    <tr><th>Тема</th><th>Получатель</th><th>Дата сохранения</th><th>X</th></tr>
  </tbody>
</table>
`);
      const inbox = $('#inboxLsList');
      const outbox = $('#outboxLsList');

      for (let key in savedLs) {
        const ls = savedLs[key];
        const html = `
<tr class="msg_read">
  <td><a href="ls?id=${key}" class="msg_open" data-id="${key}">${escapeHTML(ls.subject)}</a></td>
  <td class="cat_name" data-id="${key}">${ls.catName}</td>
  <td>${ls.savedate}</td>
  <td><input type="button" value="X" class="del-saved" data-id="${key}"></td>
</tr>
`;
        if (ls.type) outbox.append(html);
        else inbox.append(html);
        setCatName(ls.catId, `.cat_name[data-id="${key}"]`, ls.catName);
      }

      $('#saved-number').text(Object.keys(savedLs).length);
    } else {
      $('#saved-number').text(0);
      $('#saved-list').html(`Сообщений нет.`);
    }
  }

  function saveLs() {
    try {
      const savedLs = JSON.parse(window.localStorage.getItem('cwmod_ls') || '{}');
      const main = $('#main');
      const lsId = parseInt(window.location.href.split('=')[1], 10);
      const lsInfo = $('#msg_info').html();
      const ls = {};

      ls.subject = $('#msg_subject').text();
      ls.text = $('#msg_table').find('.parsed').html();
      ls.date = findDate(lsInfo);
      ls.catId = parseInt(getNumber($('#msg_login').attr('href')), 10);
      ls.catName = $('#msg_login').html();
      ls.myId = main.data('id');
      ls.myName = main.data('login');
      ls.type = lsInfo.match(/Получатель/) ? 1 : 0;

      const now = new Date();
      const saveDate = {};
      saveDate.day = leadingZero(now.getDate());
      saveDate.month = leadingZero(now.getMonth() + 1);
      saveDate.year = now.getFullYear();
      saveDate.hour = leadingZero(now.getHours());
      saveDate.minute = leadingZero(now.getMinutes());
      saveDate.second = leadingZero(now.getSeconds());
      ls.savedate = `${saveDate.year}-${saveDate.month}-${saveDate.day} ${saveDate.hour}:${saveDate.minute}:${saveDate.second}`;
      savedLs[lsId] = ls;
      saveData('ls', savedLs);

      if ($('#savedate').length) $('#savedate').text(`Сохранено ${ls.savedate}`);
      else {
        const td = $('#msg_table > tbody > tr:last-child > td');
        td.append(
          `<i id="savedate">Сохранено ${ls.savedate}</i> <input id="delete-saved-ls" type="button" value="Удалить" data-id="${lsId}" style="float: right">`
        );
        $('#saved-number').text(Number($('#saved-number').text()) + 1);
      }

      updateSavedLsList();
    } catch (err) {
      window.console.error('Варомод:', err);
    }
  }

  function deleteSavedLs(lsId) {
    try {
      const savedLs = JSON.parse(window.localStorage.getItem('cwmod_ls'));
      if (!savedLs) return;
      delete savedLs[lsId];
      saveData('ls', savedLs);
    } catch (err) {
      window.console.error('Варомод:', err);
    }
  }

  function getSavedLsById(lsId) {
    try {
      const savedLs = JSON.parse(window.localStorage.getItem('cwmod_ls'));
      if (!savedLs) return;
      const ls = savedLs[lsId];
      return ls || false;
    } catch (err) {
      window.console.error('Варомод:', err);
    }
  }
  /*
    function changeTimePage() {
      const catTimeNow = timestampToCatTime(Date.now());
      $(isDesctop ? '#branch' : '#site_table').append(`
  <div style="width: fit-content; margin: 0 auto">
    <p><b>Настоящее кошачье время</b></p>
    <p id="real-cat-time">${catTimeNow.day} ${months[catTimeNow.month]} ${catTimeNow.year} года, ${leadingZero(catTimeNow.hour)}:${leadingZero(catTimeNow.minute)}:${leadingZero(catTimeNow.second)}</p>
    <p><b>Калькулятор времени</b></p>
    <p>Кошачье время: <input type="number" id="cat-day" min="1" max=""> <input type="time" id="cat-time"></p>
    <p>Время двуногих: <input type="datetime-local" id="twoleg-time" min="${dateToString(catTimeStart)}" value="${dateToString(new Date)}" max="9999-31-12T23:59"></p>
  </div>
  `);
    }
  */
  function changeSettingsPage() {
    let css = `
.copy { cursor: pointer; }
#cwmod-settings h2 { text-indent: 1.5em; }
#cwmod-settings h3 { margin: 1em 0 0.5em 1em; }
#cwmod-settings h4 { margin: 0; }
#cwmod-settings ul { margin: 0; padding: 0 0 0 30px; list-style-type: kannada; }
#cwmod-settings ul ul { padding: 0 0 0 10px; list-style-type: none; }
#cwmod-settings li { padding: 0.2em 0; }
.cwmod-settings[type="checkbox"] { margin-left: 0; cursor: pointer; }
.cwmod-data-result { margin-bottom: 1em; max-height: 300px; overflow-y: auto; white-space: pre-line;}
.cwmod-error { font-weight: bold; color: darkred; }
.cwmod-done { font-weight: bold; color: darkgreen; }
`;
    addCSS(css);

    if (getSettings(CONF_SETTINGS_HIDE_EMAIL)) {
      const inputColor = $('input[name="mail"]').css('background-color');
      addCSS(`input[name="mail"]:not(:focus) { color: ${inputColor} !important; }`, CONF_SETTINGS_HIDE_EMAIL);
    }
    const html = `
<div id="cwmod-settings">
  <h2 id="cwmod">Настройки Варомода v${VERSION}</h2>

  <h3>Сайт</h3>

  <h4>Мой кот/моя кошка</h4>
  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_INDEX_SAVE_ALERT}"> Предупреждение при уходе со страницы</li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_INDEX_EDUCATION_HIDE}"> Скрывать обучение</li>
  </ul>

  <h4>Профили игроков</h4>
  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CAT_ADD_KRAFT_NUMBER}"> Уровень БУ цифрой</li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CAT_ENABLE_NOTES}"> Возможность создавать заметки об игроках</li>
  </ul>

  <h4>Друзья и враги</h4>
  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_FAE_SHOW_NOTES}"> Показывать заметки</li>
  </ul>

  <h4>Личные сообщения</h4>
  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_LS_ENABLE_SAVING}"> Возможность сохранять ЛС</li>
  </ul>

  <h4>Блоги и лента</h4>
  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CREATION_SAVE_ALERT}"> Предупреждение при уходе со страницы создания нового блога или поста</li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_BLOGS_AVATARS}"> Аватарки в комментариях
      <ul data-show="${CONF_BLOGS_AVATARS}">
        <li>Размер: <input class="cwmod-settings" type="number" min="30" max="250" style="width: 45px" data-conf="${CONF_BLOGS_AVATARS_SIZE}"> px</li>
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_BLOGS_AVATARS_NO_CROP}"> Не обрезать до квадрата</li>
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_BLOGS_AVATARS_BORDER}"> Рамки у аватарок</li>
      </ul>
    </li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_BLOGS_COMMENTS_SMILES}"> Смайлики в комментариях</li>
    <li>Максимальная ширина картинок
      <ul>
        <li>в блогах: <input class="cwmod-settings" type="number" min="0" max="1000" style="width: 55px" data-conf="${CONF_BLOGS_IMAGES_MAX_WIDTH}"> px</li>
        <li>в Ленте: <input class="cwmod-settings" type="number" min="0" max="1000" style="width: 55px" data-conf="${CONF_SNIFF_IMAGES_MAX_WIDTH}"> px</li>
        <li><small>0 — значение по умолчанию (не уменьшать)</small></li>
      </ul>
    </li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_BLOGS_ANSWER_BUTTON}"> Кнопка «Ответить на комментарий»</li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_BLOGS_CITE_BUTTON}"> Кнопка «Цитировать комментарий»
      <ul data-show="${CONF_BLOGS_CITE_BUTTON}">
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_BLOGS_CITE_BUTTON_HIDE}"> Показывать только при выделении текста</li>
      </ul>
    </li>
  </ul>

  <h4>Настройки</h4>
  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_SETTINGS_HIDE_EMAIL}"> Спрятать адрес электронной почты</li>
  </ul>


  <h3>Игровая</h3>

  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_ACT_END_IN_TITLE}"> Время до окончания действия в заголовке</li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_ACT_END_ALERT}"> Звук об окончании действия
      <ul data-show="${CONF_CW3_ACT_END_ALERT}">
        <li>за <input class="cwmod-settings" type="number" min="1" max="30" style="width: 35px" data-conf="${CONF_CW3_ACT_END_ALERT_TIME}"> с до окончания</li>
        <li>Звук: <input class="cwmod-settings" type="text" data-conf="${CONF_CW3_ACT_END_ALERT_SOUND}"> <a href="#" class="cwmod-settings-set-default" data-rel="${CONF_CW3_ACT_END_ALERT_SOUND}">по умолчанию</a></li>
        <li>Громкость: <input class="cwmod-settings" type="range" min="0.05" max="1" step="0.05" data-conf="${CONF_CW3_ACT_END_ALERT_VOLUME}"> <a href="#" class="cwmod-settings-test-sound" data-audio="${CONF_CW3_ACT_END_ALERT_SOUND}" data-volume="${CONF_CW3_ACT_END_ALERT_VOLUME}">проиграть</a></li>
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_ACT_END_ALERT_BLUR_ONLY}"> Только если вкладка неактивна</li>
      </ul>
    </li>
    <li>Высота лога боёв: <input class="cwmod-settings" type="number" min="70" max="1000" style="width: 55px" data-conf="${CONF_CW3_FIGHT_PANEL_HEIGHT}"> px</li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_PARAMETERS_INFO}"> Параметры подробно
      <br><small>Значения в процентах и в пикселях, примерное время выполнения действий</small>
    </li>
  </ul>

  <h4>Меню</h4>
  <ul>
  <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MENU_TARGET_BLANK}"> Открывать в новой вкладке</li>
    <li>Добавить пункты:
      <ul>
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MENU_ABOUT}"> Об игре</li>
        <!--<li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MENU_INDEX}"> ${
      $('.kn1').length ? 'Мой кот' : 'Моя кошка'
    }</li>-->
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MENU_TOP}"> СИ (список игроков)</li>
        <!--<li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MENU_CHAT}"> Чат</li>-->
        <!--<li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MENU_LS}"> ЛС</li>-->
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MENU_LS0}"> Памятка</li>
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MENU_BLOGS}"> Блоги</li>
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MENU_SNIFF}"> Лента</li>
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MENU_SETTINGS}"> Настройки</li>
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MENU_MOBILE}"> Сменить версию</li>
      </ul>
    </li>
  </ul>

  <h4>Оформление</h4>
  <ul>
    <li>Тема:
      <select class="cwmod-settings" data-conf="${CONF_CW3_THEME}">
        <option value="default">По умолчанию</option>
        <option value="dark_grey">Тёмно-серая</option>
        <option value="black_glass">Полупрозрачная чёрная</option>
      </select>
      <br><small>Тем больше нет =( если надо сделаю </small>
    </li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_COMPACT}"> Компактная игровая ${
      $(window).width() < 1500 || $(window).height() < 700 ? ' (не рекомендуется)' : ''
    }
      <ul data-show="${CONF_CW3_COMPACT}">
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_COMPACT_SWAP_SIDES}"> Поменять местами блоки (погода, действия, «во рту», чат справа)</li>
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_COMPACT_CHAT_ON_TOP}"> Чат наверху</li>
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_COMPACT_ROUND_EDGES}"> Скруглить углы</li>
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_COMPACT_SPLIT_INFO}"> Разделить параметры, историю и родственные связи <a href="#" id="about-split-info">(?)</a>
          <!--<ul data-show="${CONF_CW3_COMPACT_SPLIT_INFO}">
            <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_COMPACT_SPLIT_INFO_STICKY_HEADERS}"> Закрепить заголовки</li>
          </ul>-->
        </li>
      </ul>
    </li>
    <li>Фон страницы:
      <select class="cwmod-settings" data-conf="${CONF_CW3_BACKGROUND}">
        <option value="default">по умолчанию</option>
        <option value="location">фон локации</option>
        <option value="own">свой</option>
      </select>
      <ul data-show="${CONF_CW3_BACKGROUND}" data-cond="own">
        <li>Картинка: <input class="cwmod-settings" type="text" data-conf="${CONF_CW3_BACKGROUND_IMAGE}"></li>
      </ul>
      <ul data-show="${CONF_CW3_BACKGROUND}" data-cond="!default">
        <li>Размер:
          <select class="cwmod-settings" data-conf="${CONF_CW3_BACKGROUND_SIZE}">
            <option value="auto">автоматически</option>
            <option value="cover">по размеру страницы</option>
          </select>
        </li>
        <li>Положение:
          <select class="cwmod-settings" data-conf="${CONF_CW3_BACKGROUND_POSITION}">
            <option value="top left">вверху слева</option>
            <option value="top center">вверху по центру</option>
            <option value="top right">вверху справа</option>
            <option value="center left">по центру слева</option>
            <option value="center">по центру</option>
            <option value="center right">по центру справа</option>
            <option value="bottom left">внизу слева</option>
            <option value="bottom center">внизу по центру</option>
            <option value="bottom right">внизу справа</option>
          </select>
        </li>
      </ul>
    </li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_HISTORY_NO_UNDERLINE}"> Не подчёркивать ссылки на профили в истории</li>
  </ul>

  <h4>Окружающий мир</h4>
  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_WEATHER_SNOW}"> Снежинки на странице, когда идет снег</li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_HIDE_SKY}"> Скрывать небо</li>
  </ul>

  <h4>Локация</h4>
  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_CAGES_BORDERS}"> Обозначить границы клеток</li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_ALWAYS_DAY}"> Всегда день (убрать затемнение игрового поля)</li>
  </ul>

  <h4>Чат</h4>
  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_CHAT_QUIET_LOUDER}"> Увеличивать шрифт тихих звуков</li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_CHAT_LOUD_QUIETER}"> Уменьшать шрифт громких звуков</li>
  </ul>

  <h4>Игроки</h4>
  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_LOWER_CATS}"> Опустить котов вниз клеток
      <ul data-show="${CONF_CW3_LOWER_CATS}">
        <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_LOWER_ARROWS}"> Опустить стрелки в боережиме</li>
      </ul>
    </li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_DEAD_OPAQUE}"> Сделать мёртвых игроков непрозрачными</li>
    <li>
      <input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_CAT_INFO}"> Более подробная информация
      <br><small>То, что можно увидеть в кодах: рост, ссылка на окрас, степени грязи и болезней</small>
    </li>
    <li>
      <input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_MODIFY_INVENTORY}"> Сокращать инвентарь
      <br><small>Вместо повторения предметов одного типа писать их количество</small>
    </li>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_CW3_ADD_REALISM}"> Добавить реализма</li>
  </ul>

  <h4>Конструктор окрасов</h4>
  <ul>
    <li><input class="cwmod-settings" type="checkbox" data-conf="${CONF_KNS_SAVE_ALERT}"> Предупреждение при уходе со страницы</li>
  </ul>
  <p><input id="clear-ym-storage" type="button" value="Кнопка"> для тех, у кого ничего не сохраняется</p>
  <div id="clear-ym-storage-result"></div>

  <h3>Импорт и экспорт данных</h3>

  <details><summary>Как пользоваться</summary>
    <ol>
      <li>Скопируйте нужные данные в браузере, откуда вы их хотите перенести.</li>
      <li>Вставьте их в поле «Импорт» того же раздела в браузере, куда вы их хотите перенести.</li>
      <li>Нажмите на кнопку «Объединить» («Обновить» в случае настроек).</li>
    </ol>
  </details>

  <h4>Заметки об игроках</h4>
  <p>Экспорт: <input class="cwmod-data-export" data-export="notes" type="text" readonly> <img class="copy" title="Скопировать" alt="Скопировать" data-copy="notes" src="cw3/symbole/copy.png"></p>
  <p>Импорт: <input class="cwmod-data-import" data-import="notes" type="text"></p>
  <p><input class="cwmod-data-merge" data-merge="notes" type="button" value="Объединить"></p>
  <div class="cwmod-data-result" data-result="notes"></div>

  <h4>Личные сообщения</h4>
  <p>Экспорт: <input class="cwmod-data-export" data-export="ls" type="text" readonly> <img class="copy" title="Скопировать" alt="Скопировать" data-copy="ls" src="cw3/symbole/copy.png"></p>
  <p>Импорт: <input class="cwmod-data-import" data-import="ls" type="text"></p>
  <p><input class="cwmod-data-merge" data-merge="ls" type="button" value="Объединить"></p>
  <div class="cwmod-data-result" data-result="ls"></div>

  <h4>Настройки</h4>
  <p>Экспорт: <input class="cwmod-data-export" data-export="settings" type="text" readonly> <img class="copy" title="Скопировать" alt="Скопировать" data-copy="settings" src="cw3/symbole/copy.png"></p>
  <p>Импорт: <input class="cwmod-data-import" data-import="settings" type="text"></p>
  <p><input class="cwmod-data-merge" data-merge="settings" type="button" value="Обновить"></p>
  <div class="cwmod-data-result" data-result="settings"></div>

  <h3><a href="/blog482084">Блог Варомода</a>(утеряно) <a href="https://cw-mod.github.io/cw-mod/" target="_blanc">Страничка восстанавливающегося мода</a> </h3>
  <p>Вы находитесь на ${baseUrl}</p>

</div>
`;

    $(isDesktop ? '#branch' : '#site_table').append(html);
    updateSettingsInputs();

    try {
      $('.cwmod-data-export').each(function () {
        const key = $(this).data('export');
        $(this).val(window.localStorage.getItem('cwmod_' + key));
      });

      $(window).on('storage', function (e) {
        if (e.originalEvent.key === 'cwmod_settings') {
          $('[data-export="notes"]').val(e.originalEvent.newValue);
        }
        if (e.originalEvent.key === 'cwmod_ls') {
          $('[data-export="ls"]').val(e.originalEvent.newValue);
        }
      });
    } catch (err) {
      window.console.error('Варомод:', err);
    }

    $('#about-split-info').click(function (e) {
      e.preventDefault();
      showCwmodPopup('alert', '<img src="https://porch.website/cwmod/settings.png">');
    });

    $('.cwmod-data-import').click(function () {
      $(this).select();
    });

    $('.cwmod-data-merge').click(function () {
      const key = $(this).data('merge');
      mergeData(key);
    });

    $('.copy').click(function () {
      const key = $(this).data('copy');
      $(`input[data-export="${key}"]`).select();
      document.execCommand('copy');
      alert('Скопировано!');
    });

    $(`[data-conf="${CONF_SETTINGS_HIDE_EMAIL}"]`).change(function () {
      if ($(this).is(':checked')) {
        addCSS(`input[name="mail"]:not(:focus) { color: #333; }`, CONF_SETTINGS_HIDE_EMAIL);
      } else removeCSS(CONF_SETTINGS_HIDE_EMAIL);
    });

    $('#clear-ym-storage').click(function () {
      try {
        window.localStorage.setItem('storage-test', Math.pow(2, 1023).toString(2));
        window.localStorage.removeItem('storage-test');
        const ymSize = window.localStorage.getItem('_ym_alt_retryReqs').length;
        if (ymSize) {
          window.localStorage.removeItem('_ym_alt_retryReqs');
          $('#clear-ym-storage-result').html(
            `<p>Возможно, чистка ${ymSize} байт данных Яндекс.Метрики могла помочь.</p>`
          );
        }
      } catch (err) {}
    });
  }

  function mergeData(dataKey) {
    $(`[data-result]`).empty();
    let exp = $(`[data-export="${dataKey}"]`).val();
    let imp = $(`[data-import="${dataKey}"]`).val();
    if (!imp) {
      mergeDataError(dataKey, null, ['С чем объединять-то?', '<img src="/img/stickers/systempaw2/6.png">']);
      return;
    }
    try {
      if (exp) exp = JSON.parse(exp);
    } catch (err) {
      window.console.error(err);
      mergeDataError(dataKey, 'export', ['Ошибка парсинга JSON']);
      return;
    }
    try {
      imp = JSON.parse(imp);
    } catch (err) {
      window.console.error(err);
      mergeDataError(dataKey, 'import', ['Ошибка парсинга JSON']);
      return;
    }

    const validExp = mergeDataValidate(dataKey, exp);
    if (validExp.error) {
      mergeDataError(dataKey, 'export', validExp.text);
      return;
    }
    const validImp = mergeDataValidate(dataKey, imp);
    if (validImp.error) {
      mergeDataError(dataKey, 'import', validImp.text);
      return;
    }

    let text = [];
    const merged = Object.assign({}, exp, imp);
    Object.keys(merged).forEach(function (key) {
      if (dataKey === 'settings') {
        if (DEFAULTS[key] === undefined) {
          delete merged[key];
          return;
        }
      }
      if (exp[key] && imp[key]) {
        if (dataKey === 'ls') {
          if (exp[key].catName === imp[key].catName && exp[key].savedate > imp[key].savedate) {
            merged[key] = exp[key];
          }
        } else if (dataKey === 'notes') {
          if (exp[key] === imp[key]) return;
          else if (exp[key].indexOf(imp[key]) !== -1) {
            merged[key] = exp[key];
            text.push(`Заметки об игроке с ID ${key}: "${exp[key]}" и "${imp[key]}" — объединены`);
          } else if (imp[key].indexOf(exp[key]) === -1) {
            merged[key] = exp[key] + '\n' + imp[key];
            text.push(`Заметки об игроке с ID ${key}: "${exp[key]}" и "${imp[key]}" — объединены в "${merged[key]}"`);
          }
        }
      }
    });
    console.log(merged);
    saveData(dataKey, merged);
    $('[data-export="${dataKey}"]').val(JSON.stringify(merged));
    mergeDataDone(dataKey, text);
  }

  function mergeDataValidate(dataKey, data) {
    let error = false,
      text = [];
    Object.keys(data).forEach(function (k) {
      if (dataKey === 'notes') {
        if (!/^\d+$/.test(k)) {
          error = true;
          text.push(`Ключ _${k}_ не ID игрока`);
        }
        if (typeof data[k] !== 'string') {
          error = true;
          text.push(`Элемент _${k}_ не заметка`);
        }
      } else if (dataKey === 'ls') {
        if (!/^\d+$/.test(k)) {
          error = true;
          text.push(`Ключ _${k}_ не ID сообщения`);
        }
        if (typeof data[k] !== 'object') {
          error = true;
          text.push(`Элемент _${k}_ не сообщение`);
        } else {
          const lsKeys = ['subject', 'text', 'type', 'savedate', 'catId', 'catName', 'date', 'myId', 'myName'];
          const thisKeys = Object.keys(data[k]);
          if (thisKeys.length !== lsKeys.length) {
            error = true;
            text.push(`Элемент ${k} не сообщение`);
          } else {
            let keysError = false;
            lsKeys.forEach(function (key) {
              if (thisKeys.indexOf(key) === -1) {
                keysError = true;
              }
            });
            if (keysError) {
              error = true;
              text.push(`Элемент ${k} не сообщение`);
            }
          }
        }
      }
    });
    return { error: error, text: text };
  }

  function mergeDataError(dataKey, type, text = []) {
    let errorText = 'Ошибка: ';
    const errors = {
      export: 'неправильный формат исходных данных (в порядке всё с ними было, зачем трогать???)',
      import: 'неправильный формат входных данных',
    };
    errorText += errors[type] || 'Неизвестная ошибка';
    $(`[data-result="${dataKey}"]`).append(`<p class="cwmod-error">${errorText}</p>${text.join('<br>')}`);
  }

  function mergeDataDone(dataKey, text = []) {
    let resultText = 'Данные успешно объединены';
    if (dataKey === 'settings') resultText = 'Настройки успешно обновлены';
    $(`[data-result="${dataKey}"]`).append(`<p class="cwmod-done">${resultText}!</p>${text.join('<br>')}`);
  }

  function updateSettingsInputs() {
    Object.keys(DEFAULTS).forEach(function (key) {
      const input = $(`[data-conf="${key}"]`);
      if (!input.length) return;
      const val = getSettings(key);

      if (input.is('select')) {
        $(`[data-conf="${key}"] > [value="${val}"]`).prop('selected', true);
        $(`[data-show="${key}"]`).each(function () {
          let cond = $(this).data('cond');
          const invert = /^!/.test(cond);
          cond = cond.replace(/^!/, '');
          if (invert !== (cond === val)) $(this).show();
          else $(this).hide();
        });
      } else {
        const type = input.attr('type');
        switch (type) {
          case 'text':
          case 'number':
          case 'range':
            input.val(val);
            break;
          case 'checkbox':
            input.prop('checked', val);
            if (val) $(`[data-show="${key}"]`).show();
            else $(`[data-show="${key}"]`).hide();
            break;
          default:
            window.console.error('я сломался зови хвойницу чинить');
        }
      }
    });
  }

  function addCSS(css, key) {
    const styleId = key ? 'cwmod-style-' + key : 'cwmod-style';
    const style = $('#' + styleId);
    if (style.length) {
      style.append(css);
    } else {
      $('head').append(`<style id="${styleId}">${css}</style>`);
    }
  }

  function removeCSS(key) {
    $('#cwmod-style-' + key).remove();
  }

  function getSettings(key) {
    thisPageSettings.push(key);
    const val = SETTINGS[key];
    return val !== undefined ? val : DEFAULTS[key];
  }

  function setSettings(key, val) {
    SETTINGS[key] = val;
    saveData('settings', SETTINGS);
  }

  function loadSettings() {
    const key = 'cwmod_settings';
    try {
      SETTINGS = JSON.parse(window.localStorage.getItem(key) || '{}');
      if (SETTINGS['cw3_location_bg'] != null) {
        if (SETTINGS['cw3_location_bg']) SETTINGS[CONF_CW3_BACKGROUND] = 'location';
        delete SETTINGS['cw3_location_bg'];
      }
      if (SETTINGS['cw3_location_bg_size'] != null) {
        if (SETTINGS['cw3_location_bg_size'] === 'cover') SETTINGS[CW3_BACKGROUND_SIZE] = 'cover';
        delete SETTINGS['cw3_location_bg_size'];
      }
    } catch (err) {
      alert(err);
      window.localStorage.removeItem(key);
      SETTINGS = {};
    }
  }

  function saveData(key, data) {
    try {
      window.localStorage.setItem('cwmod_' + key, JSON.stringify(data));
    } catch (err) {
      window.console.error('Варомод:', err);
    }
  }

  function addSaveAlert() {
    window.addEventListener('beforeunload', beforeunload);
    $('input[type=submit]').click(function () {
      window.removeEventListener('beforeunload', beforeunload);
    });
  }

  function beforeunload(event) {
    event.preventDefault();
    event.returnValue = '';
    return '';
  }

  function isPage(page, match) {
    if (page instanceof RegExp) return page.test(window.location.href);
    const domain = window.location.hostname.replace('www.', ''); // Убираем 'www.' если оно присутствует
    const re = new RegExp(`${domain}/` + page.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + (match ? '(#.*)?$' : ''));
    return re.test(window.location.href);
  }

  function secToTime(sec) {
    if (!sec) return '0 c';
    const d = Math.floor(convertTime('s d', sec));
    sec -= convertTime('d s', d);
    const h = Math.floor(convertTime('s h', sec));
    sec -= convertTime('h s', h);
    const m = Math.floor(convertTime('s m', sec));
    sec -= convertTime('m s', m);
    const s = Math.round(sec);
    let result = [];
    if (d) result.push(`<nobr>${d} д</nobr>`);
    if (h) result.push(`<nobr>${h} ч</nobr>`);
    if (m) result.push(`<nobr>${m} мин</nobr>`);
    if (s) result.push(`<nobr>${s} с</nobr>`);
    return result.join(' ');
  }

  function leadingZero(num) {
    return num < 10 ? '0' + num.toString() : num;
  }

  function escapeHTML(str) {
    return str.replace('<', '$lt;').replace('>', '$gt;');
  }

  function decodeHTML(str) {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    return doc.documentElement.textContent;
  }

  function getNoteByCatId(catId) {
    try {
      const savedNotes = JSON.parse(window.localStorage.getItem('cwmod_notes') || '{}');
      const text = savedNotes[catId];
      return text || false;
    } catch (err) {
      window.console.error('Варомод:', err);
    }
  }

  function addBBcode(type) {
    const bb = $('.bbcode').parent();
    if (!bb.length) return;
    if ($('.bbcode[data-code="ol"]').length) return;

    if (type) {
      bb.append(`
<button class="bbcode" title="Перенос" data-code="br" data-parameter="0">br</button>
<button class="bbcode" title="Таблица" data-code="table">table</button>
<button class="bbcode" title="Строка таблицы" data-code="tr">tr</button>
<button class="bbcode" title="Ячейка таблицы" data-code="td">td</button>
<button class="bbcode" title="Нумерованный список" data-code="ol">ol</button>
<button class="bbcode" title="Ненумерованный список" data-code="ul">ul</button>
<button class="bbcode" title="Элемент списка" data-code="li">li</button>
`);
    } else {
      $('[data-code="block"]').after(`
<button class="bbcode" title="Раскрывающийся блок" data-code="overblock" data-parameter="1" data-text="Введите название раскрывающегося блока (то же, что и у заголовка, который раскрывает этот блок):">overblock</button>
`);
      bb.append(`
<button class="bbcode" title="Абзац" data-code="p">p</button>
<button class="bbcode" title="Перенос" data-code="br" data-parameter="0">br</button>
<button class="bbcode" title="Таблица" data-code="table">table</button>
<button class="bbcode" title="Строка таблицы" data-code="tr">tr</button>
<button class="bbcode" title="Ячейка таблицы" data-code="td">td</button>
<button class="bbcode" title="Нумерованный список" data-code="ol">ol</button>
<button class="bbcode" title="Ненумерованный список" data-code="ul">ul</button>
<button class="bbcode" title="Элемент списка" data-code="li">li</button>
`);
    }
  }

  function setAvatar(catId, selector) {
    $.get('/cat' + catId.toString(), function (data) {
      const temp = $('<div/>', { html: data });
      let avatar = temp.find('[src*=avatar]').attr('src');
      if (!avatar) avatar = `${avatarDomain}/avatar/0.jpg`;
      try {
        window.sessionStorage.setItem('avatar' + catId, avatar);
      } catch (err) {}
      $(selector).css('background-image', `url(${avatar})`);
    });
  }

  function setCatName(catId, selector, oldName) {
    $.post('/preview', { text: `[link${catId}]` }, function (data) {
      data = data.replace(/<\/?div( class="parsed")?>/, '');
      $(selector).html(data);
      if (oldName && $(selector).text() !== oldName) {
        $(selector).html(data + ' (' + oldName + ')');
      }
    });
  }

  function getCatIdByName(name, callback) {
    $.post('/ajax/top_cat', { name: name }, function (data) {
      const catId = parseInt(data, 10);
      callback(catId);
    });
  }

  function getCurrentUser(callback) {
    $.get('/', function (data) {
      const temp = $('<div/>', { html: data });
      const catId = temp.find('a[href^="cat"]').first().text();
      const catName = temp.find('big').first().text();
      callback(catId, catName);
    });
  }

  function dateToString(date) {
    if (typeof date === 'number') date = new Date(date);
    const dateString = date.toISOStringLocal();
    return dateString.slice(0, 16);
  }

  function declOfNum(n, titles) {
    n = Math.abs(n);
    if (isNaN(n)) return titles[2];
    if (!Number.isInteger(n)) return titles[1];
    n %= 100;
    if (n > 10 && n < 20) return titles[2];
    n %= 10;
    if (n === 1) return titles[0];
    if (n > 1 && n < 5) return titles[1];
    return titles[2];
  }

  function convertTime(units, val) {
    const allUnits = ['ms', 's', 'm', 'h', 'd'];
    units = units.split(' ');
    let valUnit = allUnits.indexOf(units[0]);
    const resultUnit = allUnits.indexOf(units[1]);
    const multipliers = [1000, 60, 60, 24];
    if (valUnit > resultUnit)
      while (valUnit !== resultUnit) {
        val *= multipliers[valUnit - 1];
        valUnit--;
      }
    else
      while (valUnit !== resultUnit) {
        val /= multipliers[valUnit];
        valUnit++;
      }
    return val;
  }

  function findDate(text) {
    return text.match(/(\d?\d )?[а-я]+ (\d{4} )?в \d?\d:\d\d/i)[0];
  }

  function catTimeToMs(y, m, d, h, min, s) {
    // отсчёт месяцев с 0, дней с 1
    const result = ((((((y * 12 + m) * 28 + --d) * 24 + h) * 60 + min) * 60 + s) * 1000) / 7;
    return Math.round(result);
  }

  function timestampToCatTime(timestamp) {
    const secInYear = 12 * 28 * 24 * 60 * 60;
    const secInMonth = 28 * 24 * 60 * 60;
    const ms = timestamp - catTimeStart;
    let time = Math.round((ms / 1000) * 7);
    const year = Math.floor(time / secInYear);
    time -= year * secInYear;
    const month = Math.floor(time / secInMonth);
    time -= month * secInMonth;
    const day = Math.floor(convertTime('s d', time));
    time -= convertTime('d s', day);
    const hour = Math.floor(convertTime('s h', time));
    time -= convertTime('h s', hour);
    const minute = Math.floor(convertTime('s m', time));
    time -= convertTime('m s', minute);
    const second = time;

    return {
      year: year,
      month: month,
      day: day + 1,
      hour: hour,
      minute: minute,
      second: second,
    };
  }

  function getNumber(s) {
    return Number(s.match(/\d+/)[0]);
  }

  function bbencode(html) {
    html = html.replace(/<br>/g, '[br]');
    html = html.replace(/<(\/?)b>/gm, '[$1b]');
    html = html.replace(/<(\/?)i>/gm, '[$1i]');
    html = html.replace(/<(\/?)s>/gm, '[$1s]');
    html = html.replace(/<(\/?)u>/gm, '[$1u]');
    html = html.replace(/<\/?tbody>/gm, '');
    html = html.replace(/<(\/?)table>/gm, '[$1table=0]');
    html = html.replace(/<(\/?)table border="1">/gm, '[$1table]');
    html = html.replace(/<(\/?)tr>/gm, '[$1tr]');
    html = html.replace(
      /<td align="center" valign="top" style="height:25px">(.(?![/b]<\/td>)+)<\/td>/gm,
      '[td][center]$1[/center][/td]'
    );
    html = html.replace(/<(\/?)td>/gm, '[$1td]');
    html = html.replace(/[td][i]Цитата:[/i](.(?![/td])+)[/td]/gm, '[td][size=10][i]Цитата:[/i]$1[/size][/td]');
    html = html.replace(/<a href="([^"]+)"( target="_blank")?>/gm, '[url=$1]');
    html = html.replace(/<\/a>/gm, '[/url]');
    html = html.replace(/<img src="([^"]+)"( alt="([^"]+)")?( style="max-width: 4000px;")?>/gm, '[img]$1[/img]');
    html = html.replace(
      /<iframe width="640" height="390" src="https:\/\/www\.youtube\.com\/embed\/([^"]+)" frameborder="0" allowfullscreen=""><\/iframe>/gm,
      '[header=$1]Видеозапись[/header][br][block=$1][video]$1[/video][/block]'
    );
    html = html.replace(
      /<audio controls=""><source src="([^"]+)" type="audio\/mpeg"> Воспроизведение аудиофайлов не поддерживается вашим браузером.<\/audio>/gm,
      '[header=$1]Аудиозапись[/header][br][block=$1][audio]$1[/audio][/block]'
    );
    html = html.replace(/<(\/?)li>/gm, '[$1li]');
    html = html.replace(/<(\/?)ol( style="display:inline-block")?>/gm, '[$1ol]');
    html = html.replace(/<(\/?)ul( style="display:inline-block")?>/gm, '[$1ul]');
    html = html.replace(/<[^>]+>/gm, '');
    html = decodeHTML(html);
    return html;
  }
})(window, document, jQuery);
