/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/gameinfo/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Adds text fields to the title screen for copyright/website/etc.
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: 1.2.0
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.8.0
 * ----------------------------------------------------------------------------
 * Description: This plugin adds three text fields to the title screen, such as
 * as version info, a link to your website, copyright information, or anything
 * else.
 * ----------------------------------------------------------------------------
 * Documentation:
 * With this plugin, you can add some basic info about your game at the bottom
 * of the title screen. This includes the game version, your website, and any
 * copyright info. Of course, you could use these text fields for other
 * purposes as well.
 *
 * You can also use this to add social media buttons to the title, which when
 * clicked will open the user's preferred browser with your social media page.
 * These buttons can also run custom JS when clicked. Although the buttons are
 * meant for social media buttons, you can technically show any image anywhere
 * on screen which can be clicked, allowing you to use pictures for your title
 * screen.
 * ---------------------------Cursor Types-------------------------------------
 * You can set the cursor type when a button is hovered. By default, it is a
 * pointer style which usually indicates a link. However, you can use any of
 * the following cursor types available to CSS. Here is a link to help you
 * know which cursor types are available and what they are called:
 * https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
 * Please note that links in this documentation could have changed since
 * written, Casper Gaming cannot control the content on the links and is not
 * liable if the link changes to something malicious.
 * -------------------------Gradient Colors------------------------------------
 * The gradient color for the background rect supports any html color type,
 * but rgba is recommended due to the added alpha channel (opacity). You can
 * choose a color from any online color picker, and then copy the rgba string.
 * One such color picker is available at: https://rgbacolorpicker.com/
 * Please note that links in this documentation could have changed since
 * written, Casper Gaming cannot control the content on the links and is not
 * liable if the link changes to something malicious.
 * -------------------------Plugin Commands------------------------------------
 * This plugin does not use plugin commands.
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_GameInfo.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -------------------------Version History------------------------------------
 * Version 1.1.0
 * - Added ability to add buttons on the title screen for social media, patron,
 *   discord, etc.
 *
 * Version 1.1.1
 * - Fixed bug with buttons disappearing in some cases
 * - Added cursor change to a pointer over the buttons
 *
 * Version 1.1.2
 * - Websites now open in user default browser (local mode only)
 *
 * Version 1.1.3
 * - Bugfix for pointer cursor staying if select with keyboard
 *
 * Version 1.2.0
 * - Added font face option
 * - Added option to draw rectangle behind text
 * - Added custom JS to run when button is clicked
 * - Added control over cursor change when button hovered
 * - Added more control over button opacity
 * - Button images now support any image folder
 * - Now warn instead of crash on invalid json detected
 *
 * @param Text Options
 *
 * @param Font Size
 * @parent Text Options
 * @type number
 * @min 1
 * @default 12
 * @desc Size of the font
 *
 * @param Font Outline Width
 * @parent Text Options
 * @type number
 * @min 0
 * @default 2
 * @desc Bigger number means the outline will be wider. Set to 0 for no outline.
 *
 * @param Font Outline Color
 * @parent Text Options
 * @default black
 * @desc The color of the outline
 *
 * @param Font Face
 * @parent Text Options
 * @desc The font face to use (leave blank to use game default)
 * 
 * @param Left Text
 * @parent Text Options
 * @desc Text to display in the lower left corner of the title screen
 * 
 * @param Center Text
 * @parent Text Options
 * @desc Text to display in the center bottom of the title screen
 * 
 * @param Right Text
 * @parent Text Options
 * @desc Text to display in the bottom right of the title screen
 *
 * @param Draw Background Rect
 * @parent Text Options
 * @type boolean
 * @default false
 * @desc Draw a background rectangle behind the text?
 *
 * @param Background Rect Height
 * @parent Text Options
 * @type number
 * @default 40
 * @desc The height of the background rect
 *
 * @param Background Gradient 1
 * @parent Text Options
 * @default rgba(0, 0, 0, 0)
 * @desc The first color in the background rect gradient
 *
 * @param Background Gradient 2
 * @parent Text Options
 * @default rgba(0, 0, 0, 0.5)
 * @desc The second color in the background rect gradient
 *
 * @param Button Options
 *
 * @param Buttons
 * @parent Button Options
 * @type struct<Button>[]
 * @default []
 * @desc Set up clickable buttons here
 *
 * @param Opacity Step
 * @parent Button Options
 * @type number
 * @min 1
 * @default 5
 * @desc Amount opacity changes per step when hovered / exited
*/
/*~struct~Button:
 * @param Image
 * @type file
 * @dir img
 * @desc The image file (stored in pictures folder) to use
 *
 * @param x
 * @type number
 * @min 0
 * @default 0
 * @desc The x coordinate to show the button
 *
 * @param y
 * @type number
 * @min 0
 * @default 0
 * @desc The y coordinate to show the button
 *
 * @param width
 * @type number
 * @min 1
 * @default 50
 * @desc The width of the button
 *
 * @param height
 * @type number
 * @min 1
 * @default 50
 * @desc The height of the button
 *
 * @param Opacity
 * @type number
 * @min 0
 * @max 255
 * @default 200
 * @desc The opacity of the button when NOT hovered
 *
 * @param Hover Opacity
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * @desc The opacity of the button when hovered
 *
 * @param Cursor
 * @default pointer
 * @desc The type of cursor to change to when hovered
 *
 * @param URL
 * @desc Enter in a website url which will be launched on click
 *
 * @param JS
 * @type multiline_string
 * @desc Custom JS code to run when this button is clicked
*/
/*:zh-CN
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/gameinfo/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc 游戏信息系统（在标题画面添加游戏信息和带链接的按钮）
 * @help
 * ============================================================================
 * 【使用条款】
 * 1、本插件可作商用或非商用。
 * 2、须注明插件作者"Casper Gaming"。
 * 3、须提供该插件的作者网站链接。
 * 4、最终使用条款以作者官网公告为准。https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * 【赞助支持】
 * 您可以登陆以下网站并对作者进行支持和赞助。
 * 然后获得作者和其插件的最新资讯，以及测试版插件的试用。
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * 【插件版本】V 1.2.0
 * ----------------------------------------------------------------------------
 * 【兼容性】仅测试作者所制作的插件
 * 【RM版本】RPG Maker MZ 1.8.0
 * ----------------------------------------------------------------------------
 * 【插件描述】 
 * 1、在标题画面下方添加三段文字信息。如游戏版本、网站等。
 * 2、在标题画面添加带有链接的按钮。
 * ----------------------------------------------------------------------------
 * 【使用说明】本插件不支持事件的插件指令。
 * With this plugin, you can add some basic info about your game at the bottom
 * of the title screen. This includes the game version, your website, and any
 * copyright info. Of course, you could use these text fields for other
 * purposes as well.
 *
 * You can also use this to add social media buttons to the title, which when
 * clicked will open the user's preferred browser with your social media page.
 * These buttons can also run custom JS when clicked. Although the buttons are
 * meant for social media buttons, you can technically show any image anywhere
 * on screen which can be clicked, allowing you to use pictures for your title
 * screen.
 * ---------------------------Cursor Types-------------------------------------
 * You can set the cursor type when a button is hovered. By default, it is a
 * pointer style which usually indicates a link. However, you can use any of
 * the following cursor types available to CSS. Here is a link to help you
 * know which cursor types are available and what they are called:
 * https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
 * Please note that links in this documentation could have changed since
 * written, Casper Gaming cannot control the content on the links and is not
 * liable if the link changes to something malicious.
 * -------------------------Gradient Colors------------------------------------
 * The gradient color for the background rect supports any html color type,
 * but rgba is recommended due to the added alpha channel (opacity). You can
 * choose a color from any online color picker, and then copy the rgba string.
 * One such color picker is available at: https://rgbacolorpicker.com/
 * Please note that links in this documentation could have changed since
 * written, Casper Gaming cannot control the content on the links and is not
 * liable if the link changes to something malicious.
 * -------------------------Plugin Commands------------------------------------
 * This plugin does not use plugin commands.
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_GameInfo.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * ----------------------------------------------------------------------------
 * 【版本历史】
 * V 1.1.0 - 新增功能：在标题画面可以添加社交媒体、赞助人等带链接的按钮。
 *
 * V 1.1.1 
 * 1、修复了某些情况下按钮会消失的BUG。
 * 2、新增功能：将鼠标指针放到按钮上会高亮显示。
 *
 * V 1.1.2 - 以用户默认的浏览器打开网站。（仅限本地模式）
 *
 * V 1.1.3 - 修复了当使用键盘选择时鼠标指针出现异常的BUG
 *
 * Version 1.2.0
 * - Added font face option
 * - Added option to draw rectangle behind text
 * - Added custom JS to run when button is clicked
 * - Added control over cursor change when button hovered
 * - Added more control over button opacity
 * - Button images now support any image folder
 * - Now warn instead of crash on invalid json detected
 *
 * @param Text Options
 * @text 文本设置
 *
 * @param Font Size
 * @text 字体大小
 * @parent Text Options
 * @type number
 * @min 1
 * @default 12
 * @desc 设置底部信息文本的字体大小。（默认12）
 *
 * @param Font Outline Width
 * @text 文字描边大小
 * @parent Text Options
 * @type number
 * @min 0
 * @default 2
 * @desc 设置底部信息文本的描边大小。（默认2，设置0为无描边）
 *
 * @param Font Outline Color
 * @text 文字描边颜色
 * @parent Text Options
 * @default black
 * @desc 设置底部信息文本的描边颜色。（默认黑色，应该可以使用#FFFFFF格式或任意html颜色格式）
 *
 * @param Font Face
 * @parent Text Options
 * @desc The font face to use (leave blank to use game default)
 * 
 * @param Left Text
 * @text 底部左侧信息
 * @parent Text Options
 * @desc 设置标题画面底部左侧的文本信息。
 * 
 * @param Center Text
 * @text 底部中间信息
 * @parent Text Options
 * @desc 设置标题画面底部中间的文本信息。
 * 
 * @param Right Text
 * @text 底部右侧信息
 * @parent Text Options
 * @desc 设置标题画面底部右侧的文本信息。
 *
 * @param Draw Background Rect
 * @parent Text Options
 * @type boolean
 * @default false
 * @desc Draw a background rectangle behind the text?
 *
 * @param Background Rect Height
 * @parent Text Options
 * @type number
 * @default 40
 * @desc The height of the background rect
 *
 * @param Background Gradient 1
 * @parent Text Options
 * @default rgba(0, 0, 0, 0)
 * @desc The first color in the background rect gradient
 *
 * @param Background Gradient 2
 * @parent Text Options
 * @default rgba(0, 0, 0, 0.5)
 * @desc The second color in the background rect gradient
 *
 * @param Button Options
 *
 * @param Buttons
 * @parent Button Options
 * @text 添加按钮
 * @type struct<Button>[]
 * @default []
 * @desc 设置并添加一个按钮在标题屏幕上。
 *
 * @param Opacity Step
 * @parent Button Options
 * @type number
 * @min 1
 * @default 5
 * @desc Amount opacity changes per step when hovered / exited
*/
/*~struct~Button:zh-CN
 * @param Image
 * @text 按钮图片
 * @type file
 * @dir img
 * @desc 选择使用一张图片作为按钮。（图片路径：工程/img）
 *
 * @param x
 * @text X轴坐标
 * @type number
 * @min 0
 * @default 0
 * @desc 图标在标题画面里的X轴坐标位置。
 *
 * @param y
 * @text Y轴坐标
 * @type number
 * @min 0
 * @default 0
 * @desc 图标在标题画面里的Y轴坐标位置。
 *
 * @param width
 * @text 按钮宽度
 * @type number
 * @min 1
 * @default 50
 * @desc 按钮的图片尺寸的宽度。（默认50）
 *
 * @param height
 * @text 按钮高度
 * @type number
 * @min 1
 * @default 50
 * @desc 按钮的图片尺寸的高度。（默认50）
 *
 * @param Opacity
 * @type number
 * @min 0
 * @max 255
 * @default 200
 * @desc The opacity of the button when NOT hovered
 *
 * @param Hover Opacity
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * @desc The opacity of the button when hovered
 *
 * @param Cursor
 * @default pointer
 * @desc The type of cursor to change to when hovered
 *
 * @param URL
 * @text 链接
 * @desc 设置一个点击按钮后可以跳转的URL链接。
 *
 * @param JS
 * @type multiline_string
 * @desc Custom JS code to run when this button is clicked
*/
/*:es
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/gameinfo/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Agrega campos de texto a la pantalla de titulo para derechos de autor/sitio web/etc.
 * @help
 * ============================================================================
 * Para terminos y condiciones de uso de este pluging en tu juego, por favor
 * visita:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * ¡Conviértete en un Patrocinador para obtener acceso a los plugings beta y
 * alfa, ademas de otras cosas geniales!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Versión: 1.2.0
 * ----------------------------------------------------------------------------
 * Compatibilidad: Sólo probado con mis CGMZ plugins.
 * Hecho para RPG Maker MZ 1.8.0
 * ----------------------------------------------------------------------------
 * Descripción: Este plugin agrega tres campos de texto a la pantalla de
 * titulo, como informacion de la versión, un enlace a tu sitio web,
 * información de derechos de autor, o cualquier otra cosa.
 * ----------------------------------------------------------------------------
 * Documentación:
 * With this plugin, you can add some basic info about your game at the bottom
 * of the title screen. This includes the game version, your website, and any
 * copyright info. Of course, you could use these text fields for other
 * purposes as well.
 *
 * You can also use this to add social media buttons to the title, which when
 * clicked will open the user's preferred browser with your social media page.
 * These buttons can also run custom JS when clicked. Although the buttons are
 * meant for social media buttons, you can technically show any image anywhere
 * on screen which can be clicked, allowing you to use pictures for your title
 * screen.
 * ---------------------------Cursor Types-------------------------------------
 * You can set the cursor type when a button is hovered. By default, it is a
 * pointer style which usually indicates a link. However, you can use any of
 * the following cursor types available to CSS. Here is a link to help you
 * know which cursor types are available and what they are called:
 * https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
 * Please note that links in this documentation could have changed since
 * written, Casper Gaming cannot control the content on the links and is not
 * liable if the link changes to something malicious.
 * -------------------------Gradient Colors------------------------------------
 * The gradient color for the background rect supports any html color type,
 * but rgba is recommended due to the added alpha channel (opacity). You can
 * choose a color from any online color picker, and then copy the rgba string.
 * One such color picker is available at: https://rgbacolorpicker.com/
 * Please note that links in this documentation could have changed since
 * written, Casper Gaming cannot control the content on the links and is not
 * liable if the link changes to something malicious.
 * -------------------------Plugin Commands------------------------------------
 * Este plugin no usa comandos de pluging.
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_GameInfo.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * ---------------------Historial de Versiones---------------------------------
 * Versión 1.1.0
 * - Se agregó la opcion de agregar botones en la pantala de título para redes
 *   sociales, patron, discord, etc.
 *
 * Versión 1.1.1
 * - Error corregido con botones que desaparecen en algunos casos
 * - Se agregó un cambio de cursor a un puntero sobre los botones
 *
 * Versión 1.1.2
 * - Los sitios web ahora abren en el navegador predeterminado del usuario
 *   (Sólo local)
 *
 * Versión 1.1.3
 * - Corrección de errores para que el cursor de puntero permanezca si se
 *   selecciona con el teclado
 *
 * Versión 1.2.0
 * - Added font face option
 * - Added option to draw rectangle behind text
 * - Added custom JS to run when button is clicked
 * - Added control over cursor change when button hovered
 * - Added more control over button opacity
 * - Button images now support any image folder
 * - Now warn instead of crash on invalid json detected
 *
 * @param Text Options
 * @text Opciones de texto
 *
 * @param Font Size
 * @text Tamaño de la fuente
 * @parent Text Options
 * @type number
 * @min 1
 * @default 12
 * @desc Tamaño de la fuente
 *
 * @param Font Outline Width
 * @text Ancho del contorno de la fuente
 * @parent Text Options
 * @type number
 * @min 0
 * @default 2
 * @desc Un número más grande significa que el contorno será mas ancho. Establecer en 0 para no tener contorno
 *
 * @param Font Outline Color
 * @text Color del contorno de la fuente
 * @parent Text Options
 * @default black
 * @desc El color del contorno
 *
 * @param Font Face
 * @parent Text Options
 * @desc The font face to use (leave blank to use game default)
 * 
 * @param Left Text
 * @text Texto izquierdo
 * @parent Text Options
 * @desc Texto para mostrar en la esquina inferior izquiera de la pantalla de título 
 * 
 * @param Center Text
 * @text Texto central
 * @parent Text Options
 * @desc Texto para mostrar en la parte inferior central de la pantalla de título
 * 
 * @param Right Text
 * @text Texto derecho
 * @parent Text Options
 * @desc Texto para mostrar en la parte inferior derecha de la pantalla de título
 *
 * @param Draw Background Rect
 * @parent Text Options
 * @type boolean
 * @default false
 * @desc Draw a background rectangle behind the text?
 *
 * @param Background Rect Height
 * @parent Text Options
 * @type number
 * @default 40
 * @desc The height of the background rect
 *
 * @param Background Gradient 1
 * @parent Text Options
 * @default rgba(0, 0, 0, 0)
 * @desc The first color in the background rect gradient
 *
 * @param Background Gradient 2
 * @parent Text Options
 * @default rgba(0, 0, 0, 0.5)
 * @desc The second color in the background rect gradient
 *
 * @param Button Options
 *
 * @param Buttons
 * @parent Button Options
 * @text Botones
 * @type struct<Button>[]
 * @default []
 * @desc Configure los botones en los que se puede hacer clic aquí
 *
 * @param Opacity Step
 * @parent Button Options
 * @type number
 * @min 1
 * @default 5
 * @desc Amount opacity changes per step when hovered / exited
*/
/*~struct~Button:es
 * @param Image
 * @text Archivo de Imagenes
 * @type file
 * @dir img
 * @desc El archivo de imagen (almacenado en la carpeta de imágenes) para usar
 *
 * @param x
 * @text Coordenada x
 * @type number
 * @min 0
 * @default 0
 * @desc La coordenada x para mostrar el botón
 *
 * @param y
 * @text Coordenada y
 * @type number
 * @min 0
 * @default 0
 * @desc La coordenada y para mostrar el botón
 *
 * @param width
 * @text Ancho del botón
 * @type number
 * @min 1
 * @default 50
 * @desc El ancho del botón
 *
 * @param height
 * @text Altura del botón
 * @type number
 * @min 1
 * @default 50
 * @desc La altura del botón
 *
 * @param Opacity
 * @type number
 * @min 0
 * @max 255
 * @default 200
 * @desc The opacity of the button when NOT hovered
 *
 * @param Hover Opacity
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * @desc The opacity of the button when hovered
 *
 * @param Cursor
 * @default pointer
 * @desc The type of cursor to change to when hovered
 *
 * @param URL
 * @text URL de sitio web
 * @desc Entrar en la URL de un sitio web que se inicirá al hacer clic
 *
 * @param JS
 * @type multiline_string
 * @desc Custom JS code to run when this button is clicked
*/
Imported.CGMZ_GameInfo = true;
CGMZ.Versions["Game Info"] = "1.2.0";
CGMZ.GameInfo = {};
CGMZ.GameInfo.parameters = PluginManager.parameters('CGMZ_GameInfo');
CGMZ.GameInfo.LeftText = CGMZ.GameInfo.parameters["Left Text"];
CGMZ.GameInfo.CenterText = CGMZ.GameInfo.parameters["Center Text"];
CGMZ.GameInfo.RightText = CGMZ.GameInfo.parameters["Right Text"];
CGMZ.GameInfo.FontFace = CGMZ.GameInfo.parameters["Font Face"];
CGMZ.GameInfo.FontOutlineColor = CGMZ.GameInfo.parameters["Font Outline Color"];
CGMZ.GameInfo.BackgroundGradient1 = CGMZ.GameInfo.parameters["Background Gradient 1"];
CGMZ.GameInfo.BackgroundGradient2 = CGMZ.GameInfo.parameters["Background Gradient 2"];
CGMZ.GameInfo.FontSize = Number(CGMZ.GameInfo.parameters["Font Size"]);
CGMZ.GameInfo.FontOutlineWidth = Number(CGMZ.GameInfo.parameters["Font Outline Width"]);
CGMZ.GameInfo.OpacityStep = Number(CGMZ.GameInfo.parameters["Opacity Step"]);
CGMZ.GameInfo.BackgroundRectHeight = Number(CGMZ.GameInfo.parameters["Background Rect Height"]);
CGMZ.GameInfo.DrawBackgroundRect = (CGMZ.GameInfo.parameters["Draw Background Rect"] === 'true');
CGMZ.GameInfo.Buttons = CGMZ_Utils.parseJSON(CGMZ.GameInfo.parameters["Buttons"], [], "CGMZ Game Info", "Your Buttons parameter was set up incorrectly and could not be read.");
//=============================================================================
// Scene_Title
//-----------------------------------------------------------------------------
// Modify the title scene to add additional text at bottom.
// modified functions: createForeground
//=============================================================================
//-----------------------------------------------------------------------------
// Also add CGMZ info text to foreground
//-----------------------------------------------------------------------------
const alias_CGMZ_GameInfo_createForeground = Scene_Title.prototype.createForeground;
Scene_Title.prototype.createForeground = function() {
    alias_CGMZ_GameInfo_createForeground.call(this);
	this.CGMZ_GameInfo_DrawGameInfo();
	this.CGMZ_GameInfo_DrawSocialButtons();
};
//-----------------------------------------------------------------------------
// Draw CGMZ info text
//-----------------------------------------------------------------------------
Scene_Title.prototype.CGMZ_GameInfo_DrawGameInfo = function () {
	const x = 20;
    const y = Graphics.height - (28 + CGMZ.GameInfo.FontSize);
    const maxWidth = Graphics.width - x * 2;
	const bitmap = this._gameTitleSprite.bitmap;
	if(CGMZ.GameInfo.DrawBackgroundRect) {
		bitmap.gradientFillRect(0, Graphics.height - CGMZ.GameInfo.BackgroundRectHeight, Graphics.width, CGMZ.GameInfo.BackgroundRectHeight, CGMZ.GameInfo.BackgroundGradient1, CGMZ.GameInfo.BackgroundGradient2, true);
	}
	if(CGMZ.GameInfo.FontFace) bitmap.fontFace = CGMZ.GameInfo.FontFace;
	bitmap.outlineColor = CGMZ.GameInfo.FontOutlineColor;
	bitmap.outlineWidth = CGMZ.GameInfo.FontOutlineWidth;
    bitmap.fontSize = CGMZ.GameInfo.FontSize;
	bitmap.drawText(CGMZ.GameInfo.LeftText, x, y, maxWidth, 48, 'left');
    bitmap.drawText(CGMZ.GameInfo.CenterText, x, y, maxWidth, 48, 'center');
	bitmap.drawText(CGMZ.GameInfo.RightText, x, y, maxWidth, 48, 'right');
};
//-----------------------------------------------------------------------------
// Draw CGMZ social media / patreon / etc buttons
//-----------------------------------------------------------------------------
Scene_Title.prototype.CGMZ_GameInfo_DrawSocialButtons = function() {
	for(const btnJSON of CGMZ.GameInfo.Buttons) {
		const btn = CGMZ_Utils.parseJSON(btnJSON, null, "CGMZ Game Info", "One of your buttons was set up incorrectly and could not be read.");
		if(!btn) continue;
		const sprite = new Sprite_CGMZ_GameInfo_Button(btn);
		const imgData = CGMZ_Utils.getImageData(btn["Image"], "img");
		sprite.bitmap = ImageManager.loadBitmap(imgData.folder, imgData.filename);
		sprite.move(btn.x, btn.y);
		sprite.bitmap.addLoadListener(this.CGMZ_GameInfo_scaleSprite.bind(this, {"sprite": sprite, "width": btn.width, "height": btn.height}));
		this.addChild(sprite);
	}
};
//-----------------------------------------------------------------------------
// Scale sprite after load
//-----------------------------------------------------------------------------
Scene_Title.prototype.CGMZ_GameInfo_scaleSprite = function(args) {
	const sprite = args.sprite;
	sprite.scale.x = args.width / sprite.width;
	sprite.scale.y = args.height / sprite.height;
};
//=============================================================================
// Sprite_CGMZ_GameInfo_Button
//-----------------------------------------------------------------------------
// Buttons for the title screen with mouse over behavior and click behavior
//=============================================================================
function Sprite_CGMZ_GameInfo_Button() {
    this.initialize(...arguments);
}
Sprite_CGMZ_GameInfo_Button.prototype = Object.create(Sprite_Clickable.prototype);
Sprite_CGMZ_GameInfo_Button.prototype.constructor = Sprite_CGMZ_GameInfo_Button;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
Sprite_CGMZ_GameInfo_Button.prototype.initialize = function(btn) {
	Sprite_Clickable.prototype.initialize.call(this);
	this._opacities = {normal: Number(btn["Opacity"]), hover: Number(btn["Hover Opacity"])};
	this.opacity = this._opacities.normal;
	this._targetOpacity = this._opacities.normal;
	this._url = btn["URL"];
	this._js = btn["JS"];
	this._cursor = document.body.style.cursor;
	this._hoverCursor = btn["Cursor"];
};
//-----------------------------------------------------------------------------
// On destroy, turn cursor back to normal
//-----------------------------------------------------------------------------
Sprite_CGMZ_GameInfo_Button.prototype.destroy = function() {
	document.body.style.cursor = this._cursor;
	Sprite_Clickable.prototype.destroy.call(this);
};
//-----------------------------------------------------------------------------
// Update
//-----------------------------------------------------------------------------
Sprite_CGMZ_GameInfo_Button.prototype.update = function() {
	Sprite_Clickable.prototype.update.call(this);
	if(this.opacity !== this._targetOpacity) {
		this.updateOpacity();
	}
};
//-----------------------------------------------------------------------------
// Update the opacity of the sprite
//-----------------------------------------------------------------------------
Sprite_CGMZ_GameInfo_Button.prototype.updateOpacity = function() {
	if(this.opacity < this._targetOpacity) {
		this.opacity += CGMZ.GameInfo.OpacityStep;
		if(this.opacity > this._targetOpacity) {
			this.opacity = this._targetOpacity;
		}
	} else {
		this.opacity -= CGMZ.GameInfo.OpacityStep;
		if(this.opacity < this._targetOpacity) {
			this.opacity = this._targetOpacity;
		}
	}
};
//-----------------------------------------------------------------------------
// If mouse over, change opacity to hover opacity
//-----------------------------------------------------------------------------
Sprite_CGMZ_GameInfo_Button.prototype.onMouseEnter = function() {
    this._targetOpacity = this._opacities.hover;
	this._cursor = document.body.style.cursor;
	document.body.style.cursor = this._hoverCursor;
};
//-----------------------------------------------------------------------------
// If not hovered, change opacity to normal opacity
//-----------------------------------------------------------------------------
Sprite_CGMZ_GameInfo_Button.prototype.onMouseExit = function() {
    this._targetOpacity = this._opacities.normal;
	document.body.style.cursor = this._cursor;
};
//-----------------------------------------------------------------------------
// Open URL when clicked
//-----------------------------------------------------------------------------
Sprite_CGMZ_GameInfo_Button.prototype.onClick = function() {
	if(this._url) {
		if(Utils.isNwjs()) {
			require('nw.gui').Shell.openExternal(this._url);
		} else {
			window.open(this._url);
		}
	}
	if(this._js) {
		const f = new Function(this._js);
		f.call(this);
	}
};