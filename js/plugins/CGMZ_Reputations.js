/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/reputations/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @orderAfter CGMZ_ToastManager
 * @plugindesc Creates a reputation system for your game
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: Beta R4
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.8.0
 * ----------------------------------------------------------------------------
 * Description: Creates a reputation system for your game. You can have
 * different categories of reputations (for example, people or towns or
 * factions). Reputations can have multiple levels as well (for example,
 * friendly / exalted) with configurable amounts of reputation needed for
 * each level.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ------------------------------Beta Notes------------------------------------
 * Want additional features not already present? Make suggestions on the
 * Patreon Post or in my discord under the #suggestions channel!
 * https://discord.gg/Gbx7JXP
 * ------------------------------Text Codes------------------------------------
 * This plugin supports text codes (such as \c[x] or \v[x]) in most areas. It
 * also supports automatic word wrap, but you can also add manual line breaks
 * in descriptions.
 *
 * Additionally, the toast messages support some text codes specific to this
 * plugin:
 * %reprank - will be replaced by the current rank of the reputation
 * %repname - will be replaced by the current name of the reputation
 * ----------------------------Negative Ranks----------------------------------
 * When using Negative ranks, make sure you set your reputation to allow for
 * negative reputation or it will not go below 0.
 *
 * Negative ranks should be placed before positive ranks in the reputation's
 * ranks parameter.
 * -------------------------------JS Info--------------------------------------
 * Some people may want to call the scene using JavaScript. You can do so
 * with the following code:
 * 
 * SceneManager.push(CGMZ_Scene_Reputations);
 * ----------------------------Plugin Commands---------------------------------
 * • Call Scene
 * Calls the reputation scene
 *
 * • Reinitialize
 * This will reset all reputation data as if you had just started a new game.
 * Use for saved game testing.
 *
 * • Discover Reputation
 * This will discover (or undiscover) a given reputation.
 *
 * • Gain Reputation
 * Allows you to add reputation points to a reputation
 *
 * • Lose Reputation
 * Allows you to subtract reputation points from a reputation
 *
 * Set Reputation
 * • Allows you to set reputation points for a reputation
 *
 * Get Reputation
 * • Allows you to store the amount of reputation points in the provided
 * reputation within a game variable.
 *
 * • Change Rep Image
 * Use this to change the picture associated with a rep.
 * 
 * • Change Rep Description
 * Used to change the description associated with a reputation.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is partially compatible with saved games. This means you can:
 * ✓ Add this plugin to a saved game and it will work as expected
 * ✓ Change rank params and changes will be reflected in saved games
 * ✓ Remove the plugin with no issue to save data
 * 
 * However, the following will not work in saved games:
 * ✘ Change reputation parameters will not reflect in saved games: name,
 * category picture, description, discovered state, starting rep
 *
 * If changing the above parameters, use plugin command for saved games.
 * ----------------------------Version History---------------------------------
 * Beta R2
 * - Added Display Info parameter to allow control over what is displayed
 * - Added windowskin, padding, back opacity, tone options for each window
 * - Added reputation scene background image option
 * - Added Height and Windowskin options to toast parameters
 * - Reputation picture now supports any folder, not just pictures folder
 * - Moved unnecessary data out of save data
 * - Icon, color parameters now use built in selector ui
 * - Updated Reputation Rank parameters
 * - Now warn instead of crash when invalid json detected
 *
 * Beta R3
 * - Added negative reputation ranks
 * - Added option to disable touch ui space
 * - Fixed bug with default toast se parameter not being correct json
 *
 * Beta R4
 * - Added more options for customization of reputation categories
 * - Fixed bug that would crash the game when not using categories
 *
 * @command callScene
 * @text Call Scene
 * @desc Calls the Reputation scene
 *
 * @command gainRep
 * @text Gain Reputation
 * @desc Adds to the amount of reputation the player has
 *
 * @arg name
 * @text Reputation Name
 * @desc The name of the reputation
 *
 * @arg category
 * @text Reputation Category
 * @desc The name of the category the reputation belongs to
 *
 * @arg amount
 * @type number
 * @text Amount
 * @min 0
 * @desc The amount of reputation to gain
 * @default 0
 *
 * @command loseRep
 * @text Lose Reputation
 * @desc Subtracts from the amount of reputation the player has
 *
 * @arg name
 * @text Reputation Name
 * @desc The name of the reputation
 *
 * @arg category
 * @text Reputation Category
 * @desc The name of the category the reputation belongs to
 *
 * @arg amount
 * @type number
 * @text Amount
 * @min 0
 * @desc The amount of reputation to lose
 * @default 0
 *
 * @command setRep
 * @text Set Reputation
 * @desc Set the amount of reputation the player has to a constant
 *
 * @arg name
 * @text Reputation Name
 * @desc The name of the reputation
 *
 * @arg category
 * @text Reputation Category
 * @desc The name of the category the reputation belongs to
 *
 * @arg amount
 * @type number
 * @text Amount
 * @min 0
 * @desc The amount of reputation the player should have
 * @default 0
 *
 * @command discover
 * @text Discover Reputation
 * @desc Discovers (or undiscovers) a reputation
 *
 * @arg name
 * @text Reputation Name
 * @desc The name of the reputation to discover
 *
 * @arg category
 * @text Reputation Category
 * @desc The name of the category the reputation belongs to
 *
 * @arg discover
 * @type boolean
 * @text Discover
 * @desc Discovers the reputation if true. Undiscovers the reputation if false.
 * @default true
 *
 * @command getRep
 * @text Get Reputation
 * @desc Store amount of reputation the player has in a game variable
 *
 * @arg name
 * @text Reputation Name
 * @desc The name of the reputation
 *
 * @arg category
 * @text Reputation Category
 * @desc The name of the category the reputation belongs to
 *
 * @arg variable
 * @type variable
 * @text Variable
 * @min 0
 * @desc The variable to store the reputation amount in
 * @default 0
 *
 * @command Change Rep Image
 * @desc Change the reputation image
 *
 * @arg Reputation Name
 * @desc The name of the reputation
 *
 * @arg Reputation Category
 * @desc The name of the category the reputation belongs to
 *
 * @arg Image
 * @type file
 * @dir img
 * @desc The image to use for the reputation (will be resized to fit window if too wide)
 *
 * @command Change Rep Description
 * @desc Change the reputation description
 *
 * @arg Reputation Name
 * @desc The name of the reputation
 *
 * @arg Reputation Category
 * @desc The name of the category the reputation belongs to
 *
 * @arg Description
 * @type note
 * @default ""
 * @desc The description to use for the reputation.
 *
 * @command reinitialize
 * @text Reinitialize
 * @desc Resets all reputation data as if you just started a new game.
 *
 * @param Reputations
 * @type struct<Reputation>[]
 * @default []
 * @desc Set up different reputations here
 *
 * @param Reputation Ranks
 * @type struct<ReputationRank>[]
 * @default []
 * @desc Set up different reputation ranks here
 *
 * @param Reputation Categories
 * @type struct<ReputationCategory>[]
 * @default []
 * @desc Set up how reputation categories appear here
 *
 * @param Reputation Options
 *
 * @param Common Event Rank Up
 * @parent Reputation Options
 * @type number
 * @default 0
 * @min 0
 * @desc Common event to call when a rep ranks up
 *
 * @param Common Event Rank Down
 * @parent Reputation Options
 * @type number
 * @default 0
 * @min 0
 * @desc Common event to call when a rep ranks down
 *
 * @param Reputation Scene Options
 *
 * @param Display Info
 * @parent Reputation Scene Options
 * @type select[]
 * @option Name
 * @option Progress
 * @option Description
 * @option Profile
 * @option Image
 * @option Blank Line
 * @default ["Name","Progress","Description","Profile","Image"]
 * @desc The info and order it is displayed in for the display window
 *
 * @param Display Hidden Reputations
 * @parent Reputation Scene Options
 * @type boolean
 * @default true
 * @desc Whether undiscovered reputations are displayed in the reputation scene.
 *
 * @param Show Actor Faces
 * @parent Reputation Scene Options
 * @type boolean
 * @desc Determine if the display window should display actor faces when reputations track actors
 * @default true
 *
 * @param Description Alignment
 * @parent Reputation Scene Options
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc The alignment of the description text.
 * @default left
 *
 * @param Icon Alignment
 * @parent Reputation Scene Options
 * @type select
 * @option left
 * @option right
 * @desc The alignment of the icon in the category window
 * @default left
 *
 * @param Category Alignment
 * @parent Reputation Scene Options
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc The alignment of the category text
 * @default center
 *
 * @param Default Gauge Color 1
 * @parent Reputation Scene Options
 * @type color
 * @desc Default color 1 for rep gauges (if not using ranks).
 * @default 20
 *
 * @param Default Gauge Color 2
 * @parent Reputation Scene Options
 * @type color
 * @desc Default color 2 for rep gauges (if not using ranks).
 * @default 21
 *
 * @param Label Color
 * @parent Reputation Scene Options
 * @type color
 * @desc Color to draw label text in.
 * @default 16
 *
 * @param Scroll Speed
 * @parent Reputation Scene Options
 * @type number
 * @min 0
 * @desc speed at which the display window scrolls (if needed)
 * @default 1
 *
 * @param Scroll Wait
 * @parent Reputation Scene Options
 * @type number
 * @min 0
 * @desc amount of time (in frames) to wait before beginning to scroll
 * @default 300
 *
 * @param Scroll Deceleration
 * @parent Reputation Scene Options
 * @type number
 * @min 0.01
 * @max 0.99
 * @decimals 2
 * @desc Rate of deceleration after letting go of touch
 * @default 0.92
 *
 * @param Auto Scroll
 * @parent Reputation Scene Options
 * @type boolean
 * @desc Determine if the display window should automatically scroll after so long of no user input
 * @default true
 *
 * @param Background Image
 * @parent Reputation Scene Options
 * @type file
 * @dir img
 * @desc The background image to use for the scene
 *
 * @param Category Windowskin
 * @parent Reputation Scene Options
 * @type file
 * @dir img
 * @desc Windowskin to use, set blank to use default
 *
 * @param Category Padding
 * @parent Reputation Scene Options
 * @type number
 * @min -1
 * @desc Window padding. Set to -1 for default
 * @default -1
 *
 * @param Category Back Opacity
 * @parent Reputation Scene Options
 * @type number
 * @min -1
 * @max 255
 * @desc Window back opacity. Set to -1 for default
 * @default -1
 *
 * @param Category Tone
 * @parent Reputation Scene Options
 * @type struct<Tone>
 * @default {"Red":"-256","Green":"0","Blue":"0"}
 * @desc Windowskin tone. Set red to -256 to not use.
 *
 * @param List Windowskin
 * @parent Reputation Scene Options
 * @type file
 * @dir img
 * @desc Windowskin to use, set blank to use default
 *
 * @param List Padding
 * @parent Reputation Scene Options
 * @type number
 * @min -1
 * @desc Window padding. Set to -1 for default
 * @default -1
 *
 * @param List Back Opacity
 * @parent Reputation Scene Options
 * @type number
 * @min -1
 * @max 255
 * @desc Window back opacity. Set to -1 for default
 * @default -1
 *
 * @param List Tone
 * @parent Reputation Scene Options
 * @type struct<Tone>
 * @default {"Red":"-256","Green":"0","Blue":"0"}
 * @desc Windowskin tone. Set red to -256 to not use.
 *
 * @param Display Windowskin
 * @parent Reputation Scene Options
 * @type file
 * @dir img
 * @desc Windowskin to use, set blank to use default
 *
 * @param Display Padding
 * @parent Reputation Scene Options
 * @type number
 * @min -1
 * @desc Window padding. Set to -1 for default
 * @default -1
 *
 * @param Display Back Opacity
 * @parent Reputation Scene Options
 * @type number
 * @min -1
 * @max 255
 * @desc Window back opacity. Set to -1 for default
 * @default -1
 *
 * @param Display Tone
 * @parent Reputation Scene Options
 * @type struct<Tone>
 * @default {"Red":"-256","Green":"0","Blue":"0"}
 * @desc Windowskin tone. Set red to -256 to not use.
 *
 * @param Disable Touch UI Space
 * @parent Reputation Scene Options
 * @type boolean
 * @default false
 * @desc If touch UI is OFF, don't show the Touch UI button space?
 *
 * @param Text Options
 *
 * @param Hidden Reputation Name
 * @parent Text Options
 * @default ???
 * @desc The display name for reputations which are not yet discovered
 *
 * @param Hidden Reputation Text
 * @parent Text Options
 * @default This reputation has not yet been discovered.
 * @desc The text to show in display window for reputations which are not yet discovered
 *
 * @param Rank Label
 * @parent Text Options
 * @default Current Rank:
 * @desc The text label for the player's rank (if reputation has ranks)
 *
 * @param Description Label
 * @parent Text Options
 * @default Description:
 * @desc The text label for the reputation description (leave blank for no label)
 *
 * @param Profile Label
 * @parent Text Options
 * @default Profile:
 * @desc The text label for the reputation actor profile (leave blank for no label)
 *
 * @param CGMZ Options
 *
 * @param Reputation Up Toast
 * @parent CGMZ Options
 * @type struct<Toast>
 * @default {"display":"true","Line 1":"\\c[3]Reputation Increased!\\c[0]","Line 2":"%repname: %reprank","Sound Effect":"{\"SE\":\"\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","Width":"0","Use Custom Tone":"false","Tone":"{\"Red\":\"0\",\"Green\":\"0\",\"Blue\":\"0\"}","Style":"Window"}
 * @desc Options for the Reputation Up Toast
 *
 * @param Reputation Down Toast
 * @parent CGMZ Options
 * @type struct<Toast>
 * @default {"display":"true","Line 1":"\\c[2]Reputation Decreased!\\c[0]","Line 2":"%repname: %reprank","Sound Effect":"{\"SE\":\"\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","Width":"0","Use Custom Tone":"false","Tone":"{\"Red\":\"0\",\"Green\":\"0\",\"Blue\":\"0\"}","Style":"Window"}
 * @desc Options for the Reputation Down Toast
*/
/*~struct~Reputation:
 * @param name
 * @text Name
 * @desc The name of the reputation. This should be unique for every reputation within a category
 * 
 * @param category
 * @text Category
 * @desc Determine which category this reputation should display under in the reputation scene
 * 
 * @param startingReputation
 * @text Starting Rep
 * @type number
 * @min -9999999
 * @default 0
 * @desc The amount of reputation the player has at the start of a new game.
 *
 * @param discovered
 * @text Discovered
 * @type boolean
 * @default true
 * @desc Whether the reputation is discovered at the start of the game or not.
 *
 * @param Allow Negative
 * @type boolean
 * @default false
 * @desc If true, reputation amount can go below 0.
 *
 * @param actorId
 * @text Actor ID
 * @type actor
 * @default 0
 * @desc Set this to an actor to have it track actor name changes
 *
 * @param description
 * @text Description
 * @type note
 * @default ""
 * @desc The description to use for the reputation.
 *
 * @param icon
 * @text Icon
 * @type icon
 * @default 0
 * @desc Icon index to use for the reputation. Set to 0 to not use
 *
 * @param Color
 * @type color
 * @default 0
 * @desc Color to use for the reputation
 *
 * @param Picture
 * @type file
 * @dir img/
 * @desc The image to use for the reputation (will be resized to fit window if too wide)
 * 
 * @param maxRep
 * @text Max Rep
 * @type number
 * @min 0
 * @default 0
 * @desc The maximum amount of reputation the player can have if not using ranks (display only).
 *
 * @param ranks
 * @text Ranks
 * @type text[]
 * @default []
 * @desc Enter rank IDs in the order you want the player to progress through the ranks. Leave empty if not using ranks.
 */
/*~struct~ReputationRank:
 * @param id
 * @desc The ID you want to use to refer to this reputation rank. Case insensitive. MUST be unique.
 *
 * @param Name
 * @desc The name of the reputation rank.
 * 
 * @param Reputation Amount
 * @type number
 * @min -9999999
 * @default 1
 * @desc The amount of reputation before advancing to the next rank.
 *
 * @param Icon
 * @type icon
 * @default 0
 * @desc Icon index to use for the reputation rank. Set to 0 to not use
 *
 * @param Color
 * @type color
 * @default 0
 * @desc Color of the reputation rank
 *
 * @param Gauge Color 1
 * @type color
 * @desc Color 1 for rep gauges.
 * @default 20
 *
 * @param Gauge Color 2
 * @type color
 * @desc Color 2 for rep gauges .
 * @default 21
*/
/*~struct~ReputationCategory:
 * @param id
 * @desc The category id, should match the Reputation's Category parameter
 *
 * @param Display Name
 * @desc The name shown when the category is displayed. Supports text codes.
 * 
 * @param Icon
 * @type icon
 * @default 0
 * @desc The icon associated with the category
 *
 * @param Background Image
 * @type file
 * @dir img
 * @desc A background image to use for the category command. Blank = default black rectangle
 *
 * @param Background Image X
 * @type number
 * @default 0
 * @min 0
 * @desc The x coordinate to start the background image from the source image (upper left corner)
 *
 * @param Background Image Y
 * @type number
 * @default 0
 * @min 0
 * @desc The y coordinate to start the background image from the source image (upper left corner)
*/
/*~struct~Toast:
 * @param Display
 * @type boolean
 * @default true
 * @desc Determines if this toast is displayed
 *
 * @param Line 1
 * @desc Text to show in line 1 of the toast
 *
 * @param Line 2
 * @desc Text to show in line 2 of the toast
 * 
 * @param Sound Effect
 * @type struct<ToastSE>
 * @default {"Name":"","Volume":"90","Pitch":"100","Pan":"0"}
 * @desc Sound effect options for the toast. Set SE name to blank to not use
 *
 * @param Width
 * @type number
 * @default 0
 * @min 0
 * @desc Width of the toast. Set to 0 to use default toast width.
 *
 * @param Height
 * @type number
 * @default 0
 * @min 0
 * @desc Height of the toast. Set to 0 to use default toast height.
 *
 * @param Tone
 * @type struct<Tone>
 * @default {"Red":"-256","Green":"0","Blue":"0"}
 * @desc Windowskin tone. Set red to -256 to not use.
 *
 * @param Background Style
 * @type select
 * @option Window
 * @option Dim
 * @option Transparent
 * @desc Window background style. Same as Show Text event command.
 * @default Window
 *
 * @param Windowskin
 * @type file
 * @dir img
 * @desc Windowskin to use. Set as blank to use toast default
*/
/*~struct~ToastSE:
 * @param Name
 * @type file
 * @dir audio/se
 * @desc The sound effect file to play
 *
 * @param Volume
 * @type number
 * @min 0
 * @max 100
 * @default 90
 * @desc Volume of SE
 *
 * @param Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100
 * @desc The pitch of the SE
 *
 * @param Pan
 * @type number
 * @min -100
 * @max 100
 * @default 0
 * @desc The pan of the SE
*/
/*~struct~Tone:
 * @param Red
 * @type number
 * @min -256
 * @max 255
 * @desc Amount of red in the tone. Set to -256 to not use tone.
 * @default 0
 *
 * @param Green
 * @type number
 * @min -255
 * @max 255
 * @desc Amount of green in the tone
 * @default 0
 *
 * @param Blue
 * @type number
 * @min -255
 * @max 255
 * @desc Amount of blue in the tone
 * @default 0
*/
Imported.CGMZ_Reputations = true;
CGMZ.Versions["Reputations"] = "Beta R4";
CGMZ.Reputations = {};
CGMZ.Reputations.parameters = PluginManager.parameters('CGMZ_Reputations');
CGMZ.Reputations.HiddenRepDisplayName = CGMZ.Reputations.parameters["Hidden Reputation Name"];
CGMZ.Reputations.HiddenRepText = CGMZ.Reputations.parameters["Hidden Reputation Text"];
CGMZ.Reputations.RankLabel = CGMZ.Reputations.parameters["Rank Label"];
CGMZ.Reputations.DescriptionLabel = CGMZ.Reputations.parameters["Description Label"];
CGMZ.Reputations.ProfileLabel = CGMZ.Reputations.parameters["Profile Label"];
CGMZ.Reputations.DescriptionAlignment = CGMZ.Reputations.parameters["Description Alignment"];
CGMZ.Reputations.IconAlignment = CGMZ.Reputations.parameters["Icon Alignment"];
CGMZ.Reputations.CategoryAlignment = CGMZ.Reputations.parameters["Category Alignment"];
CGMZ.Reputations.CategoryWindowskin = CGMZ.Reputations.parameters["Category Windowskin"];
CGMZ.Reputations.ListWindowskin = CGMZ.Reputations.parameters["List Windowskin"];
CGMZ.Reputations.DisplayWindowskin = CGMZ.Reputations.parameters["Display Windowskin"];
CGMZ.Reputations.BackgroundImage = CGMZ.Reputations.parameters["Background Image"];
CGMZ.Reputations.CategoryPadding = Number(CGMZ.Reputations.parameters["Category Padding"]);
CGMZ.Reputations.CategoryBackOpacity = Number(CGMZ.Reputations.parameters["Category Back Opacity"]);
CGMZ.Reputations.ListPadding = Number(CGMZ.Reputations.parameters["List Padding"]);
CGMZ.Reputations.ListBackOpacity = Number(CGMZ.Reputations.parameters["List Back Opacity"]);
CGMZ.Reputations.DisplayPadding = Number(CGMZ.Reputations.parameters["Display Padding"]);
CGMZ.Reputations.DisplayBackOpacity = Number(CGMZ.Reputations.parameters["Display Back Opacity"]);
CGMZ.Reputations.LabelColor = Number(CGMZ.Reputations.parameters["Label Color"]);
CGMZ.Reputations.GaugeColor1 = Number(CGMZ.Reputations.parameters["Default Gauge Color 1"]);
CGMZ.Reputations.GaugeColor2 = Number(CGMZ.Reputations.parameters["Default Gauge Color 2"]);
CGMZ.Reputations.CommonEventRankUp = Number(CGMZ.Reputations.parameters["Common Event Rank Up"]);
CGMZ.Reputations.CommonEventRankDown = Number(CGMZ.Reputations.parameters["Common Event Rank Down"]);
CGMZ.Reputations.ScrollSpeed = Number(CGMZ.Reputations.parameters["Scroll Speed"]);
CGMZ.Reputations.ScrollWait = Number(CGMZ.Reputations.parameters["Scroll Wait"]);
CGMZ.Reputations.ScrollDeceleration = parseFloat(CGMZ.Reputations.parameters["Scroll Deceleration"]);
CGMZ.Reputations.DisplayHiddenReputations = (CGMZ.Reputations.parameters["Display Hidden Reputations"] === "true");
CGMZ.Reputations.ShowActorFaces = (CGMZ.Reputations.parameters["Show Actor Faces"] === "true");
CGMZ.Reputations.AutoScroll = (CGMZ.Reputations.parameters["Auto Scroll"] === "true");
CGMZ.Reputations.DisableTouchUISpace = (CGMZ.Reputations.parameters["Disable Touch UI Space"] === "true");
CGMZ.Reputations.RepUpToastOpts = CGMZ_Utils.parseJSON(CGMZ.Reputations.parameters["Reputation Up Toast"], null, "[CGMZ] Reputations", "Your Reputation Up Toast parameter was set up incorrectly and could not be read.");
CGMZ.Reputations.RepDownToastOpts = CGMZ_Utils.parseJSON(CGMZ.Reputations.parameters["Reputation Down Toast"], null, "[CGMZ] Reputations", "Your Reputation Down Toast parameter was set up incorrectly and could not be read.");
CGMZ.Reputations.Reputations = CGMZ_Utils.parseJSON(CGMZ.Reputations.parameters["Reputations"], [], "[CGMZ] Reputations", "Your Reputations parameter was set up incorrectly and could not be read.");
CGMZ.Reputations.ReputationRanks = CGMZ_Utils.parseJSON(CGMZ.Reputations.parameters["Reputation Ranks"], [], "[CGMZ] Reputations", "Your Reputation Ranks parameter was set up incorrectly and could not be read.");
CGMZ.Reputations.ReputationCategories = CGMZ_Utils.parseJSON(CGMZ.Reputations.parameters["Reputation Categories"], [], "[CGMZ] Reputations", "Your Reputation Categories parameter was set up incorrectly and could not be read.");
CGMZ.Reputations.DisplayInfo = CGMZ_Utils.parseJSON(CGMZ.Reputations.parameters["Display Info"], [], "[CGMZ] Reputations", "Your Display Info parameter was set up incorrectly and could not be read.");
CGMZ.Reputations.CategoryTone = CGMZ_Utils.parseToneJSON(CGMZ.Reputations.parameters["Category Tone"], "[CGMZ] Reputations");
CGMZ.Reputations.ListTone = CGMZ_Utils.parseToneJSON(CGMZ.Reputations.parameters["List Tone"], "[CGMZ] Reputations");
CGMZ.Reputations.DisplayTone = CGMZ_Utils.parseToneJSON(CGMZ.Reputations.parameters["Display Tone"], "[CGMZ] Reputations");
//=============================================================================
// CGMZ_Reputation
//-----------------------------------------------------------------------------
// Handles a single reputation's data
//=============================================================================
function CGMZ_Reputation() {
    this.initialize.apply(this, arguments);
}
//-----------------------------------------------------------------------------
// Initialize Reputation
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.initialize = function(reputation) {
	this._discovered = (reputation.discovered === 'true');
	this._reputation = Number(reputation.startingReputation);
	this._name = reputation.name;
	this._category = reputation.category;
	this._picture = reputation.Picture;
	this._description = CGMZ_Utils.parseJSON(reputation.description, "", "[CGMZ] Reputations", `Your reputation ${this._name} had its description set up incorrectly and could not be read.`);
};
//-----------------------------------------------------------------------------
// Check if reputation is discovered
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.isDiscovered = function() {
	return this._discovered;
};
//-----------------------------------------------------------------------------
// Get amount of rep earned in the reputation
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.repAmount = function() {
	return this._reputation;
};
//-----------------------------------------------------------------------------
// Get the display name to use for the reputation
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.getDisplayName = function() {
	const repTemp = $cgmzTemp.getReputation(this._name, this._category);
	if(!this._discovered) {
		return CGMZ.Reputations.HiddenRepDisplayName;
	}
	if(repTemp?.actorId) {
		const actor = $gameActors.actor(repTemp.actorId);
		if(actor) return actor.name();
	}
	return this._name;
};
//-----------------------------------------------------------------------------
// Changed discovery status
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.changeDiscoveredStatus = function(discovered) {
	this._discovered = discovered;
};
//-----------------------------------------------------------------------------
// Set the description to something different
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.setDescription = function(description) {
	this._description = description;
};
//-----------------------------------------------------------------------------
// Set the picture to something different
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.setPicture = function(picture) {
	this._picture = picture;
};
//-----------------------------------------------------------------------------
// Change reputation
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.changeRep = function(mode, amount) {
	const repTemp = $cgmzTemp.getReputation(this._name, this._category);
	const rank = this.calculateRankId();
	switch(mode) {
		case '=':  this._reputation = amount; break;
		case '+': this._reputation += amount; break;
		case '-': this._reputation -= amount; break;
		default:
			const script = "CGMZ Reputations";
			const error = "Malformed 'Change Reputation' command received";
			const suggestion = "Check for proper plugin command usage in events";
			$cgmzTemp.reportError(error, script, suggestion);
	}
	if(this._reputation < 0 && !repTemp.allowNegative) this._reputation = 0;
	const newRank = this.calculateRankId();
	if(rank !== newRank) {
		rank < newRank ? this.onRankUp(newRank) : this.onRankDown(newRank);
	}
};
//-----------------------------------------------------------------------------
// Get Rank ID
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.calculateRankId = function() {
	const repTemp = $cgmzTemp.getReputation(this._name, this._category);
	if(repTemp.ranks.length === 0) return 0;
	let repAmount = this.repAmount();
	if(repAmount < 0) return this.calculateNegativeRankId(repTemp);
	let rankId = 0;
	for(let i = 0; i < repTemp.ranks.length; i++) {
		rankId = i;
		const rankObject = $cgmzTemp.getReputationRank(repTemp.ranks[rankId]);
		const rankAmount = rankObject.repAmount;
		if(rankAmount < 0) continue;
		if(rankAmount > repAmount) {
			return rankId;
		}
		repAmount -= rankAmount;
	}
	return repTemp.ranks.length - 1;
};
//-----------------------------------------------------------------------------
// Get Rank ID if rep amount is negative
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.calculateNegativeRankId = function(repTemp) {
	let rankId = repTemp.ranks.length - 1;
	let repAmount = Math.abs(this.repAmount());
	for(let i = repTemp.ranks.length - 1; i >= 0; i--) {
		rankId = i;
		const rankObject = $cgmzTemp.getReputationRank(repTemp.ranks[rankId]);
		const rankAmount = rankObject.repAmount;
		if(rankAmount > 0) continue;
		const absRankAmount = Math.abs(rankAmount);
		if(absRankAmount > repAmount) {
			return rankId;
		}
		repAmount -= absRankAmount;
	}
	return 0;
};
//-----------------------------------------------------------------------------
// Get Rank ID For Display
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.calculateRankIdForDisplay = function() {
	const repTemp = $cgmzTemp.getReputation(this._name, this._category);
	if(repTemp.ranks.length === 0) return 0;
	let rankId = 0;
	let repAmount = this.repAmount();
	if(repAmount < 0) return this.calculateNegativeRankIdForDisplay(repTemp);
	for(let i = 0; i < repTemp.ranks.length; i++) {
		const rankObject = $cgmzTemp.getReputationRank(repTemp.ranks[i]);
		const rankAmount = rankObject.repAmount;
		if(rankAmount < 0) continue;
		if(rankAmount > repAmount) {
			return rankObject.id;
		}
		repAmount -= rankAmount;
	}
	return $cgmzTemp.getReputationRank(repTemp.ranks[repTemp.ranks.length - 1]).id;
};
//-----------------------------------------------------------------------------
// Get Rank ID For Display if rep amount is negative
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.calculateNegativeRankIdForDisplay = function(repTemp) {
	let rankId = repTemp.ranks.length - 1;
	let repAmount = Math.abs(this.repAmount());
	for(let i = repTemp.ranks.length - 1; i >= 0; i--) {
		const rankObject = $cgmzTemp.getReputationRank(repTemp.ranks[i]);
		const rankAmount = rankObject.repAmount;
		if(rankAmount > 0) continue;
		const absRankAmount = Math.abs(rankAmount);
		if(absRankAmount > repAmount) {
			return rankObject.id;
		}
		repAmount -= absRankAmount;
	}
	return $cgmzTemp.getReputationRank(repTemp.ranks[0]).id;
};
//-----------------------------------------------------------------------------
// Get Rank Numerator
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.calculateRankNumerator = function() {
	const repTemp = $cgmzTemp.getReputation(this._name, this._category);
	let repAmount = this.repAmount();
	if(repTemp.ranks.length === 0) {
		return (repAmount < 0) ? 0 : repAmount;
	}
	if(repAmount < 0) return this.calculateNegativeRankNumerator(repTemp);
	for(let i = 0; i < repTemp.ranks.length; i++) {
		const rankObject = $cgmzTemp.getReputationRank(repTemp.ranks[i]);
		const rankAmount = rankObject.repAmount;
		if(rankAmount < 0) continue;
		if(rankAmount > repAmount) {
			return repAmount;
		}
		repAmount -= rankAmount;
	}
	return $cgmzTemp.getReputationRank(repTemp.ranks[repTemp.ranks.length-1]).repAmount;
};
//-----------------------------------------------------------------------------
// Get Rank Numerator for negative ranks
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.calculateNegativeRankNumerator = function(repTemp) {
	let repAmount = Math.abs(this.repAmount());
	for(let i = repTemp.ranks.length - 1; i >= 0; i--) {
		const rankObject = $cgmzTemp.getReputationRank(repTemp.ranks[i]);
		const rankAmount = rankObject.repAmount;
		if(rankAmount > 0) continue;
		const absRankAmount = Math.abs(rankAmount);
		if(absRankAmount > repAmount) {
			return (-1)*repAmount;
		}
		repAmount -= absRankAmount;
	}
	return $cgmzTemp.getReputationRank(repTemp.ranks[0]).repAmount;
};
//-----------------------------------------------------------------------------
// Get Rank Denominator
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.calculateRankDenominator = function() {
	const repTemp = $cgmzTemp.getReputation(this._name, this._category);
	if(repTemp.ranks.length === 0) {
		return repTemp.maxRep;
	}
	let repAmount = this.repAmount();
	if(repAmount < 0) return this.calculateNegativeRankDenominator(repTemp);
	for(let i = 0; i < repTemp.ranks.length; i++) {
		const rankObject = $cgmzTemp.getReputationRank(repTemp.ranks[i]);
		const rankAmount = rankObject.repAmount;
		if(rankAmount < 0) continue;
		if(rankAmount > repAmount) {
			return rankAmount;
		}
		repAmount -= rankAmount;
	}
	return $cgmzTemp.getReputationRank(repTemp.ranks[repTemp.ranks.length - 1]).repAmount;
};
//-----------------------------------------------------------------------------
// Get Rank Denominator for negative ranks
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.calculateNegativeRankDenominator = function(repTemp) {
	let repAmount = Math.abs(this.repAmount());
	for(let i = repTemp.ranks.length - 1; i >= 0; i--) {
		const rankObject = $cgmzTemp.getReputationRank(repTemp.ranks[i]);
		const rankAmount = rankObject.repAmount;
		if(rankAmount > 0) continue;
		const absRankAmount = Math.abs(rankAmount);
		if(absRankAmount > repAmount) {
			return rankAmount;
		}
		repAmount -= absRankAmount;
	}
	return $cgmzTemp.getReputationRank(repTemp.ranks[0]).repAmount;
};
//-----------------------------------------------------------------------------
// Handling for reputation rank down
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.onRankDown = function(rankId) {
	this.setupToast($cgmzTemp._repDownToastOpts, rankId);
	if(CGMZ.Reputations.CommonEventRankDown) {
		$gameTemp.reserveCommonEvent(CGMZ.Reputations.CommonEventRankDown);
	}
};
//-----------------------------------------------------------------------------
// Handling for reputation rank up
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.onRankUp = function(rankId) {
	this.setupToast($cgmzTemp._repUpToastOpts, rankId);
	if(CGMZ.Reputations.CommonEventRankUp) {
		$gameTemp.reserveCommonEvent(CGMZ.Reputations.CommonEventRankUp);
	}
};
//-----------------------------------------------------------------------------
// Handling for reputation rank up
//-----------------------------------------------------------------------------
CGMZ_Reputation.prototype.setupToast = function(toastOpts, rankId) {
	if(!toastOpts) return;
	const repTemp = $cgmzTemp.getReputation(this._name, this._category);
	const toast = JSON.parse(JSON.stringify(toastOpts));
	toast.CGMZRepOptions = {rankId: repTemp.ranks[rankId], repName: this.getDisplayName()};
	$cgmzTemp.createNewToast(toast);
};
//=============================================================================
// CGMZ_ReputationTemp
//-----------------------------------------------------------------------------
// Store temporary data (unsaved) for a reputation
//=============================================================================
function CGMZ_ReputationTemp() {
    this.initialize.apply(this, arguments);
}
//-----------------------------------------------------------------------------
// Initialize Reputation Temp
//-----------------------------------------------------------------------------
CGMZ_ReputationTemp.prototype.initialize = function(reputation) {
	this.name = reputation.name;
	this.actorId = Number(reputation.actorId);
	this.iconIndex = Number(reputation.icon);
	this.color = Number(reputation.Color);
	this.maxRep = Number(reputation.maxRep);
	this.allowNegative = (reputation["Allow Negative"] === 'true');
	this.ranks = CGMZ_Utils.parseJSON(reputation.ranks, [], "[CGMZ] Reputations", `Your reputation ${this._name} had its ranks set up incorrectly and could not be read.`);
};
//=============================================================================
// CGMZ_ReputationRank
//-----------------------------------------------------------------------------
// Handles a single reputation rank. Not saved in save data.
//=============================================================================
function CGMZ_ReputationRank() {
    this.initialize.apply(this, arguments);
}
//-----------------------------------------------------------------------------
// Initialize Reputation Rank
//-----------------------------------------------------------------------------
CGMZ_ReputationRank.prototype.initialize = function(rank) {
	this.id = rank.id;
	this.name = rank.Name;
	this.repAmount = Number(rank["Reputation Amount"]);
	this.iconIndex = Number(rank.Icon);
	this.color = Number(rank.Color);
	this.gaugeColor1 = Number(rank["Gauge Color 1"]);
	this.gaugeColor2 = Number(rank["Gauge Color 2"]);
};
//=============================================================================
// CGMZ_ReputationCategory
//-----------------------------------------------------------------------------
// Handles a reputation category. Not saved in save data.
//=============================================================================
function CGMZ_ReputationCategory() {
    this.initialize.apply(this, arguments);
}
//-----------------------------------------------------------------------------
// Initialize Reputation Category
//-----------------------------------------------------------------------------
CGMZ_ReputationCategory.prototype.initialize = function(cat) {
	this.id = cat.id.toLowerCase();
	this.name = cat["Display Name"];
	this.iconIndex = Number(cat.Icon);
	this.backImg = cat["Background Image"];
	this.backImgX = Number(cat["Background Image X"]);
	this.backImgY = Number(cat["Background Image Y"]);
};
//=============================================================================
// CGMZ_Core
//-----------------------------------------------------------------------------
// Manage reputation data
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Also initialize reputation data
//-----------------------------------------------------------------------------
const alias_CGMZ_Reputations_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZ_Reputations_createPluginData.call(this);
	this.initializeReputationData(false);
};
//-----------------------------------------------------------------------------
// Alias. Also check for new reputations after load
//-----------------------------------------------------------------------------
const alias_CGMZ_Reputations_onAfterLoad = CGMZ_Core.prototype.onAfterLoad;
CGMZ_Core.prototype.onAfterLoad = function() {
	alias_CGMZ_Reputations_onAfterLoad.call(this);
	this.initializeReputationData(false);
};
//-----------------------------------------------------------------------------
// Initialize reputation data. Will only add new data if reinitialize is false
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initializeReputationData = function(reinitialize) {
	if(!this._reputations || reinitialize) {
		this.initializeReputationVariables();
	}
	for(const repJSON of CGMZ.Reputations.Reputations) {
		const parseData = CGMZ_Utils.parseJSON(repJSON, null, "[CGMZ] Reputations", "A reputation was set up incorrectly and could not be read.");
		if(!parseData) continue;
		const rep = new CGMZ_Reputation(parseData);
		const id = this.getReputationIdFromJSON(parseData);
		if(!this._reputations[id]) {
			this._reputations[id] = rep;
			this.addReputationCategory(rep);
		}
	}
};
//-----------------------------------------------------------------------------
// Initialize reputation variables
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initializeReputationVariables = function() {
	this._reputations = {};
	this._reputationCategories = [];
};
//-----------------------------------------------------------------------------
// Add a reputation category if does not already exist
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.addReputationCategory = function(reputation) {
	if(reputation._category && !this._reputationCategories.includes(reputation._category)) {
		this._reputationCategories.push(reputation._category);
	}
};
//-----------------------------------------------------------------------------
// Get reputation ID from JSON data
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getReputationIdFromJSON = function(parseData) {
	return parseData.name.toLowerCase() + "-" + parseData.category.toLowerCase();
};
//-----------------------------------------------------------------------------
// Get reputation ID directly.
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getReputationId = function(name, category) {
	return name.toLowerCase() + "-" + category.toLowerCase();
};
//-----------------------------------------------------------------------------
// Get reputation by id. Returns undefined if not found
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getReputation = function(name, category) {
	const repId = this.getReputationId(name, category);
	return this._reputations[repId];
};
//-----------------------------------------------------------------------------
// Alters the discovered property of a reputation
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.discoverReputation = function(name, category, discovered) {
	const reputation = this.getReputation(name, category);
	if(reputation) {
		discovered = (discovered === "true");
		reputation.changeDiscoveredStatus(discovered);
	}
};
//-----------------------------------------------------------------------------
// Gain/Lose rep for reputation
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.changeReputationAmount = function(name, category, mode, amount) {
	const reputation = this.getReputation(name, category);
	if(reputation) {
		reputation.changeRep(mode, amount);
	}
};
//-----------------------------------------------------------------------------
// Get reputation categories
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getReputationCategories = function() {
	return this._reputationCategories;
};
//-----------------------------------------------------------------------------
// Get all reputations
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getAllReputations = function() {
	return Object.values(this._reputations);
};
//-----------------------------------------------------------------------------
// Get all reputations in a category
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getAllReputationsByCategory = function(category) {
	const repArray = this.getAllReputations();
	return repArray.filter(reputation => reputation._category.toLowerCase() === category);
};
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Manage reputation rank data + new plugin commands
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Also initialize reputation rank data
//-----------------------------------------------------------------------------
const alias_CGMZ_Reputations_CGMZTemp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZ_Reputations_CGMZTemp_createPluginData.call(this);
	this.initializeReputationData();
	this._repUpToastOpts = this.initializeReputationToasts(CGMZ.Reputations.RepUpToastOpts);
	this._repDownToastOpts = this.initializeReputationToasts(CGMZ.Reputations.RepDownToastOpts);
};
//-----------------------------------------------------------------------------
// Initialize reputation rank data
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.initializeReputationData = function() {
	this._reputationCategories = {};
	this._reputationRanks = {};
	this._reputations = {};
	for(const rankJSON of CGMZ.Reputations.ReputationRanks) {
		const rankData = CGMZ_Utils.parseJSON(rankJSON, null, "[CGMZ] Reputations", "One of your reputation ranks was set up incorrectly and could not be read.");
		if(!rankData) continue;
		const rank = new CGMZ_ReputationRank(rankData);
		const id = rankData.id.toLowerCase();
		if(!this._reputationRanks[id]) {
			this._reputationRanks[id] = rank;
		}
	}
	for(const repJSON of CGMZ.Reputations.Reputations) {
		const repData = CGMZ_Utils.parseJSON(repJSON, null, "[CGMZ] Reputations", "A reputation was set up incorrectly and could not be read.");
		if(!repData) continue;
		const rep = new CGMZ_ReputationTemp(repData);
		const id = $cgmz.getReputationIdFromJSON(repData);
		if(!this._reputations[id]) {
			this._reputations[id] = rep;
		}
	}
	for(const catJSON of CGMZ.Reputations.ReputationCategories) {
		const catData = CGMZ_Utils.parseJSON(catJSON, null, "[CGMZ] Reputations", "A reputation category was set up incorrectly and could not be read.");
		if(!catData) continue;
		const cat = new CGMZ_ReputationCategory(catData);
		this._reputationCategories[cat.id.toLowerCase()] = cat;
	}
};
//-----------------------------------------------------------------------------
// Initialize reputation toasts
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.initializeReputationToasts = function(json) {
	const toast = CGMZ_Utils.setupToast(json, "[CGMZ] Reputations");
	if(!toast) return;
	toast.lineOne = json["Line 1"];
	toast.lineTwo = json["Line 2"];
	toast.CGMZReputationToast = true;
	return toast;
};
//-----------------------------------------------------------------------------
// Get reputation by id. Returns undefined if not found
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getReputation = function(name, category) {
	const repId = $cgmz.getReputationId(name, category);
	return this._reputations[repId];
};
//-----------------------------------------------------------------------------
// Get a reputation rank
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getReputationRank = function(id) {
	return this._reputationRanks[id.toLowerCase()];
};
//-----------------------------------------------------------------------------
// Get a reputation rank
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getReputationCategory = function(id) {
	return this._reputationCategories[id.toLowerCase()];
};
//-----------------------------------------------------------------------------
// Alias. Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZ_Reputations_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZ_Reputations_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_Reputations", "callScene", this.pluginCommandReputationsCallScene);
	PluginManager.registerCommand("CGMZ_Reputations", "reinitialize", this.pluginCommandReputationsReinitialize);
	PluginManager.registerCommand("CGMZ_Reputations", "discover", this.pluginCommandReputationsDiscover);
	PluginManager.registerCommand("CGMZ_Reputations", "gainRep", this.pluginCommandReputationsGainRep);
	PluginManager.registerCommand("CGMZ_Reputations", "loseRep", this.pluginCommandReputationsLoseRep);
	PluginManager.registerCommand("CGMZ_Reputations", "setRep", this.pluginCommandReputationsSetRep);
	PluginManager.registerCommand("CGMZ_Reputations", "getRep", this.pluginCommandReputationsGetRep);
	PluginManager.registerCommand("CGMZ_Reputations", "Change Rep Image", this.pluginCommandReputationsChangeRepImage);
	PluginManager.registerCommand("CGMZ_Reputations", "Change Rep Description", this.pluginCommandReputationsChangeRepDesc);
};
//-----------------------------------------------------------------------------
// Call reputation scene
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandReputationsCallScene = function() {
	SceneManager.push(CGMZ_Scene_Reputations);
};
//-----------------------------------------------------------------------------
// Reinitialize reputations
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandReputationsReinitialize = function() {
	$cgmz.initializeReputationData(true);
};
//-----------------------------------------------------------------------------
// (Un)discover a reputation
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandReputationsDiscover = function(args) {
	const reputation = $cgmz.getReputation(args.name, args.category);
	if(reputation) {
		reputation.changeDiscoveredStatus(args.discover === "true");
	}
};
//-----------------------------------------------------------------------------
// Gain reputation
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandReputationsGainRep = function(args) {
	const reputation = $cgmz.getReputation(args.name, args.category);
	if(reputation) {
		reputation.changeRep("+", Number(args.amount));
	}
};
//-----------------------------------------------------------------------------
// Lose reputation
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandReputationsLoseRep = function(args) {
	const reputation = $cgmz.getReputation(args.name, args.category);
	if(reputation) {
		reputation.changeRep("-", Number(args.amount));
	}
};
//-----------------------------------------------------------------------------
// Set reputation
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandReputationsSetRep = function(args) {
	const reputation = $cgmz.getReputation(args.name, args.category);
	if(reputation) {
		reputation.changeRep("=", Number(args.amount));
	}
};
//-----------------------------------------------------------------------------
// Get reputation amount, store it in game variable
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandReputationsGetRep = function(args) {
	const reputation = $cgmz.getReputation(args.name, args.category);
	if(reputation) {
		$gameVariables.setValue(Number(args.variable), reputation._reputation);
	}
};
//-----------------------------------------------------------------------------
// Changes a reputation's image
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandReputationsChangeRepImage = function(args) {
	const reputation = $cgmz.getReputation(args["Reputation Name"], args["Reputation Category"]);
	if(reputation) {
		reputation.setPicture(args.Image);
	}
};
//-----------------------------------------------------------------------------
// Changes a reputation's description
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandReputationsChangeRepDesc = function(args) {
	const reputation = $cgmz.getReputation(args["Reputation Name"], args["Reputation Category"]);
	if(reputation) {
		reputation.setDescription(JSON.parse(args.Description));
	}
};
//=============================================================================
// CGMZ_Scene_Reputations
//-----------------------------------------------------------------------------
// Handle the reputations scene
//=============================================================================
function CGMZ_Scene_Reputations() {
    this.initialize.apply(this, arguments);
}
CGMZ_Scene_Reputations.prototype = Object.create(Scene_MenuBase.prototype);
CGMZ_Scene_Reputations.prototype.constructor = CGMZ_Scene_Reputations;
//-----------------------------------------------------------------------------
// Create reputation windows
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
	this._hasCategories = $cgmz.getReputationCategories().length > 0;
	if(this._hasCategories) {
		this.createCategoryWindow();
	}
	this.createListWindow();
	this.createDisplayWindow();
	if(this._hasCategories) {
		this._categoryWindow.setListWindow(this._listWindow);
		this.createDummyWindow();
		this._displayWindow.hide();
	}
};
//-----------------------------------------------------------------------------
// Create category window
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.createCategoryWindow = function() {
	const rect = this.categoryWindowRect();
    this._categoryWindow = new CGMZ_Window_ReputationCategory(rect);
	this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
	this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
    this.addWindow(this._categoryWindow);
};
//-----------------------------------------------------------------------------
// Get category window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.categoryWindowRect = function() {
	const x = 0;
	const y = this.hasTouchUI() ? this.buttonAreaBottom() : 0;
	const width = Graphics.boxWidth;
	const height = this.calcWindowHeight(1, true);
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create list window
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.createListWindow = function() {
	const rect = this.listWindowRect();
    this._listWindow = new CGMZ_Window_ReputationList(rect, this._hasCategories);
	this._listWindow.setHandler('cancel', (this._hasCategories) ? this.onListCancel.bind(this) : this.popScene.bind(this));
	this._listWindow.setHandler('ok', this.onListOk.bind(this));
    this.addWindow(this._listWindow);
};
//-----------------------------------------------------------------------------
// Get list window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.listWindowRect = function() {
	const x = 0;
	const y = (this._hasCategories) ? this._categoryWindow.y + this._categoryWindow.height : this.hasTouchUI() ? this.buttonAreaBottom() : 0;
	const width = Graphics.boxWidth / 3;
	const height = Graphics.boxHeight - y;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create display window
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.createDisplayWindow = function() {
	const rect = this.displayWindowRect()
    this._displayWindow = new CGMZ_Window_ReputationDisplay(rect);
	this._displayWindow.setHandler('cancel', this.onDisplayCancel.bind(this));
	this._listWindow.setDisplayWindow(this._displayWindow);
    this.addWindow(this._displayWindow);
};
//-----------------------------------------------------------------------------
// Get display window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.displayWindowRect = function() {
	const x = this._listWindow.width;
	const y = this._listWindow.y;
	const width = Graphics.boxWidth - this._listWindow.width;
	const height = this._listWindow.height;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create dummy window
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.createDummyWindow = function() {
	const rect = this.displayWindowRect()
    this._dummyWindow = new CGMZ_Window_Reputation_Dummy(rect);
    this.addWindow(this._dummyWindow);
};
//-----------------------------------------------------------------------------
// Check if should make room for Touch UI
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.hasTouchUI = function() {
	return !CGMZ.Reputations.DisableTouchUISpace || ConfigManager.touchUI;
};
//-----------------------------------------------------------------------------
// On Display Cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.onDisplayCancel = function() {
	this._listWindow.activate();
};
//-----------------------------------------------------------------------------
// On List Ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.onListOk = function() {
	this._displayWindow.activate();
	this._listWindow.deactivate();
};
//-----------------------------------------------------------------------------
// On List Cancel
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.onListCancel = function() {
	this._listWindow.select(0);
	this._listWindow.deselect();
	this._listWindow.deactivate();
	this._categoryWindow.activate();
	this._displayWindow.hide();
	this._dummyWindow.show();
};
//-----------------------------------------------------------------------------
// On Category Ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.onCategoryOk = function() {
	this._categoryWindow.deactivate();
	this._listWindow.activate();
	this._listWindow.select(0);
	this._displayWindow.show();
	this._dummyWindow.hide();
	this._displayWindow.deactivate();
};
//-----------------------------------------------------------------------------
// Add custom background image
//-----------------------------------------------------------------------------
CGMZ_Scene_Reputations.prototype.createBackground = function() {
	Scene_MenuBase.prototype.createBackground.call(this);
	if(CGMZ.Reputations.BackgroundImage) {
		const imageData = CGMZ_Utils.getImageData(CGMZ.Reputations.BackgroundImage, "img");
		this._backgroundCustomSprite = new Sprite();
		this._backgroundCustomSprite.bitmap = ImageManager.loadBitmap(imageData.folder, imageData.filename);
		this.addChild(this._backgroundCustomSprite);
	}
};
//=============================================================================
// CGMZ_Window_ReputationCategory
//-----------------------------------------------------------------------------
// Command window for choosing a category for reputations
//=============================================================================
function CGMZ_Window_ReputationCategory(rect) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_ReputationCategory.prototype = Object.create(Window_HorzCommand.prototype);
CGMZ_Window_ReputationCategory.prototype.constructor = CGMZ_Window_ReputationCategory;
//-----------------------------------------------------------------------------
// Create cgmz window options object
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.CGMZ_createWindowOptions = function() {
	Window_HorzCommand.prototype.CGMZ_createWindowOptions.call(this);
	if(CGMZ.Reputations.CategoryWindowskin) this.cgmzOpts.windowskin = CGMZ.Reputations.CategoryWindowskin;
	if(CGMZ.Reputations.CategoryPadding >= 0) this.cgmzOpts.padding = CGMZ.Reputations.CategoryPadding;
	if(CGMZ.Reputations.CategoryBackOpacity >= 0) this.cgmzOpts.backOpacity = CGMZ.Reputations.CategoryBackOpacity;
	if(CGMZ.Reputations.CategoryTone?.Red >= -255) this.cgmzOpts.tone = [CGMZ.Reputations.CategoryTone.Red, CGMZ.Reputations.CategoryTone.Green, CGMZ.Reputations.CategoryTone.Blue];
};
//-----------------------------------------------------------------------------
// Window Width
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};
//-----------------------------------------------------------------------------
// Get max cols (if less than 4)
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.maxCols = function() {
	const cols = $cgmz.getReputationCategories().length;
    return Math.min(4, cols);
};
//-----------------------------------------------------------------------------
// Make list of commands to display
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.makeCommandList = function() {
	const categories = $cgmz.getReputationCategories();
	for(const category of categories) {
		const ext = this.makeCategoryExt(category);
		this.addCommand(category, category.toLowerCase(), true, ext);
	}
};
//-----------------------------------------------------------------------------
// Make category ext
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.makeCategoryExt = function(id) {
	const cat = $cgmzTemp.getReputationCategory(id);
	if(!cat) return null;
	return {
		name: cat.name,
		icon: cat.iconIndex,
		img: cat.backImg,
		imgX: cat.backImgX,
		imgY: cat.backImgY
	};
};
//-----------------------------------------------------------------------------
// Set command alignment
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.itemTextAlign = function() {
	return CGMZ.Reputations.CategoryAlignment;
};
//-----------------------------------------------------------------------------
// Allow use of text codes in command
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.drawItem = function(index) {
	const rect = this.itemLineRect(index);
	const ext = this._list[index].ext;
	let icon = 0;
	let name = this.commandName(index);
	if(ext) {
		icon = ext.icon;
		name = ext.name;
	}
	this.resetTextColor();
	this.changePaintOpacity(this.isCommandEnabled(index));
	if(icon) {
		const iconX = (CGMZ.Reputations.IconAlignment === 'left') ? rect.x : rect.x + rect.width - ImageManager.iconWidth;
		this.drawIcon(icon, iconX, rect.y + 2);
		rect.x += (ImageManager.iconWidth + 2) * (CGMZ.Reputations.IconAlignment === 'left');
		rect.width -= ImageManager.iconWidth + 2;
	}
	this.CGMZ_drawTextLine(name, rect.x, rect.y, rect.width, this.itemTextAlign());
};
//-----------------------------------------------------------------------------
// Check if command has a background image to show
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.drawItemBackground = function(index) {
	const path = this._list[index].ext?.img;
	if(path) {
		const opts = {x: this._list[index].ext.imgX, y: this._list[index].ext.imgY};
		const rect = this.itemRect(index);
		const imgData = CGMZ_Utils.getImageData(path, "img");
		const bitmap = ImageManager.loadBitmap(imgData.folder, imgData.filename);
		bitmap.addLoadListener(this.CGMZ_bltCommandBackground.bind(this, bitmap, rect, opts));
	} else {
		Window_HorzCommand.prototype.drawItemBackground.call(this, index);
	}
};
//-----------------------------------------------------------------------------
// Draw command background image
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.CGMZ_bltCommandBackground = function(bitmap, rect, opts) {
	const sw = rect.width;
    const sh = rect.height;
    const sx = opts.x;
	const sy = opts.y;
	const dw = rect.width;
	const dh = rect.height;
	const dx = rect.x;
	const dy = rect.y;
    this.contentsBack.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
};
//-----------------------------------------------------------------------------
// Set list (helper) window
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.setListWindow = function(listWindow) {
	this._listWindow = listWindow;
	this.callUpdateHelp();
};
//-----------------------------------------------------------------------------
// See if able to update helper windows
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.callUpdateHelp = function() {
	if(this.active) {
		this.updateHelperWindows();
	}
};
//-----------------------------------------------------------------------------
// See if able to update helper windows
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationCategory.prototype.updateHelperWindows = function() {
	if(this._listWindow) {
		this._listWindow.setItem(this.currentData());
	}
};
//=============================================================================
// CGMZ_Window_ReputationList
//-----------------------------------------------------------------------------
// Selectable window for choosing a reputation in a list.
//=============================================================================
function CGMZ_Window_ReputationList(rect) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_ReputationList.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Window_ReputationList.prototype.constructor = CGMZ_Window_ReputationList;
//-----------------------------------------------------------------------------
// Create cgmz window options object
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationList.prototype.CGMZ_createWindowOptions = function() {
	Window_Selectable.prototype.CGMZ_createWindowOptions.call(this);
	if(CGMZ.Reputations.ListWindowskin) this.cgmzOpts.windowskin = CGMZ.Reputations.ListWindowskin;
	if(CGMZ.Reputations.ListPadding >= 0) this.cgmzOpts.padding = CGMZ.Reputations.ListPadding;
	if(CGMZ.Reputations.ListBackOpacity >= 0) this.cgmzOpts.backOpacity = CGMZ.Reputations.ListBackOpacity;
	if(CGMZ.Reputations.ListTone?.Red >= -255) this.cgmzOpts.tone = [CGMZ.Reputations.ListTone.Red, CGMZ.Reputations.ListTone.Green, CGMZ.Reputations.ListTone.Blue];
};
//-----------------------------------------------------------------------------
// Initialize window
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationList.prototype.initialize = function(rect, hasCategories) {
    Window_Selectable.prototype.initialize.call(this, rect);
	if(!hasCategories) {
		this.refresh();
		if(this.maxItems() > 0) this.select(0);
		this.activate();
	}
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Current item
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationList.prototype.item = function() {
    return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Set Item
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationList.prototype.setItem = function(data) {
	if(this._symbol !== data.symbol) {
		this._symbol = data.symbol;
		this.refresh();
	}
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationList.prototype.refresh = function() {
    this.makeItemList();
    Window_Selectable.prototype.refresh.call(this);
};
//-----------------------------------------------------------------------------
// Make item list
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationList.prototype.makeItemList = function() {
	if(this._symbol) {
		this._data = $cgmz.getAllReputationsByCategory(this._symbol);
	} else {
		this._data = $cgmz.getAllReputations();
	}
	if(!CGMZ.Reputations.DisplayHiddenReputations) {
		this._data = this._data.filter(rep => rep._discovered);
	}
};
//-----------------------------------------------------------------------------
// Draw item in list
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationList.prototype.drawItem = function(index) {
    const item = this._data[index];
	const repTemp = $cgmzTemp.getReputation(item._name, item._category);
    const rect = this.itemRectWithPadding(index);
	let string = `\\c[${repTemp.color}]`;
	if(repTemp.iconIndex > 0) string += `\\i[${repTemp.iconIndex}]`;
	string += `${item.getDisplayName()}\\c[0]`;
    this.CGMZ_drawTextLine(string, rect.x, rect.y, rect.width, 'left');
};
//-----------------------------------------------------------------------------
// Set display window
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationList.prototype.setDisplayWindow = function(displayWindow) {
    this._displayWindow = displayWindow;
    this.callUpdateHelp();
};
//-----------------------------------------------------------------------------
// See if can update display window
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationList.prototype.callUpdateHelp = function() {
    if(this.active && this._displayWindow) {
		this._displayWindow.setItem(this.item());
	}
};
//=============================================================================
// CGMZ_Window_ReputationDisplay
//-----------------------------------------------------------------------------
// Window displaying reputation information
//=============================================================================
function CGMZ_Window_ReputationDisplay(rect) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_ReputationDisplay.prototype = Object.create(CGMZ_Window_Scrollable.prototype);
CGMZ_Window_ReputationDisplay.prototype.constructor = CGMZ_Window_ReputationDisplay;
//-----------------------------------------------------------------------------
// Create cgmz window options object
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.CGMZ_createWindowOptions = function() {
	CGMZ_Window_Scrollable.prototype.CGMZ_createWindowOptions.call(this);
	if(CGMZ.Reputations.DisplayWindowskin) this.cgmzOpts.windowskin = CGMZ.Reputations.DisplayWindowskin;
	if(CGMZ.Reputations.DisplayPadding >= 0) this.cgmzOpts.padding = CGMZ.Reputations.DisplayPadding;
	if(CGMZ.Reputations.DisplayBackOpacity >= 0) this.cgmzOpts.backOpacity = CGMZ.Reputations.DisplayBackOpacity;
	if(CGMZ.Reputations.DisplayTone?.Red >= -255) this.cgmzOpts.tone = [CGMZ.Reputations.DisplayTone.Red, CGMZ.Reputations.DisplayTone.Green, CGMZ.Reputations.DisplayTone.Blue];
};
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.initialize = function(rect) {
	const heightMultiplier = 10; // maximum of 10 windows tall of data to scroll
    CGMZ_Window_Scrollable.prototype.initialize.call(this, rect, heightMultiplier, CGMZ.Reputations.ScrollWait, CGMZ.Reputations.ScrollSpeed, CGMZ.Reputations.AutoScroll, CGMZ.Reputations.ScrollDeceleration);
	this._reputation = null;
	this._pictureSprite = new Sprite();
	this.addInnerChild(this._pictureSprite);
};
//-----------------------------------------------------------------------------
// Set the reputation to be displayed
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.setItem = function(reputation) {
	if(this._reputation === reputation) return;
	this._reputation = reputation;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.refresh = function() {
	if(!this._reputation) return;
	this.setupWindowForNewEntry();
	this._neededHeight = 0;
	this._pictureSprite.hide();
	(this._reputation.isDiscovered()) ? this.loadReputationPicture() : this.drawUndiscoveredReputation();
};
//-----------------------------------------------------------------------------
// Draw an undiscovered reputation
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.drawUndiscoveredReputation = function() {
	this._neededHeight = this.CGMZ_drawText(CGMZ.Reputations.HiddenRepText, 0, 0, 0, this.contents.width, 'center');
	this._neededHeight += $gameSystem.windowPadding()*2;
	this.checkForScroll();
};
//-----------------------------------------------------------------------------
// Draw a discovered reputation
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.drawDiscoveredReputation = function() {
	const reputation = this._reputation;
	for(const type of CGMZ.Reputations.DisplayInfo) {
		switch(type) {
			case 'Name': this.drawReputationName(reputation.getDisplayName()); break;
			case 'Progress': this.drawReputationProgress(reputation); break;
			case 'Description': this.drawReputationDescription(reputation._description); break;
			case 'Profile': this.drawReputationProfile(reputation); break;
			case 'Image': this.displayPicture(); break;
			case 'Blank Line': this._neededHeight += this.lineHeight(); break;
		}
	}
	this._neededHeight += $gameSystem.windowPadding() * 2;
	this.checkForScroll();
};
//-----------------------------------------------------------------------------
// Draw name of reputation
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.drawReputationName = function(name) {
	this.contents.fontBold = true;
	this.CGMZ_drawTextLine(name, 0, this._neededHeight, this.contents.width, 'center');
	this.contents.fontBold = false;
	this._neededHeight += this.lineHeight();
};
//-----------------------------------------------------------------------------
// Draw reputation rank and progress bar
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.drawReputationProgress = function(reputation) {
	const repTemp = $cgmzTemp.getReputation(reputation._name, reputation._category);
	let x  = 0;
	let drawingFace = false;
	if(repTemp.actorId && CGMZ.Reputations.ShowActorFaces) {
		drawingFace = true;
		const actor = $gameActors.actor(repTemp.actorId);
		this._faceBitmap = ImageManager.loadFace(actor.faceName());
		this._faceBitmap.addLoadListener(this.drawFace.bind(this, actor.faceName(), actor.faceIndex(), x, this._neededHeight, ImageManager.faceWidth, ImageManager.faceHeight));
		x += ImageManager.faceWidth + 4;
		this._neededHeight += (ImageManager.faceHeight / 2) - this.lineHeight();
	}
	let progress = this.getDisplayInfo(reputation);
	let gaugeColor1 = ColorManager.textColor(CGMZ.Reputations.GaugeColor1);
	let gaugeColor2 = ColorManager.textColor(CGMZ.Reputations.GaugeColor2);
	if(progress.rankId) {
		const rank = $cgmzTemp.getReputationRank(progress.rankId);
		let rankString = `\\c[${CGMZ.Reputations.LabelColor}]${CGMZ.Reputations.RankLabel}\\c[0]`;
		if(rank.iconIndex > 0) {
			rankString += `\\i[${rank.iconIndex}]`;
		}
		rankString += `\\c[${rank.color}]${rank.name}\\c[0]`;
		this.CGMZ_drawTextLine(rankString, x, this._neededHeight, this.contents.width-x, 'left');
		gaugeColor1 = ColorManager.textColor(rank.gaugeColor1);
		gaugeColor2 = ColorManager.textColor(rank.gaugeColor2);
		this._neededHeight += this.lineHeight();
	}
	const gaugeHeight = 24;
	this._neededHeight += gaugeHeight / 2;
	const gaugeRect = new Rectangle(x, this._neededHeight, this.contents.width - x, gaugeHeight);
	this.CGMZ_drawGauge(gaugeRect, progress.numerator / progress.denominator, gaugeColor1, gaugeColor2);
	const gaugeText = progress.numerator.toLocaleString() + "/" + progress.denominator.toLocaleString();
	this.drawText(gaugeText, x, this._neededHeight - gaugeHeight / 4, this.contents.width-x, 'center');
	this._neededHeight += gaugeHeight;
	this._neededHeight = Math.max(this._neededHeight, (this.lineHeight() + ImageManager.faceHeight) * drawingFace);
};
//-----------------------------------------------------------------------------
// Draw reputation description
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.drawReputationDescription = function(description) {
	const string = `\\c[${CGMZ.Reputations.LabelColor}]${CGMZ.Reputations.DescriptionLabel}\\c[0]${description}`;
	this._neededHeight += this.CGMZ_drawText(string, 0, 0, this._neededHeight, this.contents.width, CGMZ.Reputations.DescriptionAlignment);
};
//-----------------------------------------------------------------------------
// Draw reputation profile
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.drawReputationProfile = function(reputation) {
	const repTemp = $cgmzTemp.getReputation(reputation._name, reputation._category);
	if(!repTemp?.actorId) return;
	const actor = $gameActors.actor(repTemp.actorId);
	const profile = actor.profile().replace(/\n/, " ");
	const string = `\\c[${CGMZ.Reputations.LabelColor}]${CGMZ.Reputations.ProfileLabel}\\c[0]${profile}`;
	this._neededHeight += this.CGMZ_drawText(string, 0, 0, this._neededHeight, this.contents.width, CGMZ.Reputations.DescriptionAlignment);
};
//-----------------------------------------------------------------------------
// Load reputation image
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.loadReputationPicture = function() {
	this._pictureSprite.hide();
	if(this._reputation._picture) {
		const imageData = CGMZ_Utils.getImageData(this._reputation._picture, "img");
		this._pictureSprite.bitmap = ImageManager.loadBitmap(imageData.folder, imageData.filename);
		this._pictureSprite.bitmap.addLoadListener(this.drawDiscoveredReputation.bind(this));
	} else {
		this.drawDiscoveredReputation();
	}
};
//-----------------------------------------------------------------------------
// Display reputation picture bitmap image
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.displayPicture = function() {
	if(!this._reputation._picture) return;
	this._pictureSprite.y = this._neededHeight;
	let scale = 1;
	if(this._pictureSprite.width > this.contents.width) {
		scale = this.contents.width/this._pictureSprite.width;
	}
	this._pictureSprite.scale.x = scale;
	this._pictureSprite.scale.y = scale;
	this._pictureSprite.x = (this.contents.width - this._pictureSprite.width * scale) / 2;
	this._pictureSprite.show();
	this._neededHeight += this._pictureSprite.height * scale;
};
//-----------------------------------------------------------------------------
// Get reputation's display info (current rank + current amount into rank)
//-----------------------------------------------------------------------------
CGMZ_Window_ReputationDisplay.prototype.getDisplayInfo = function(rep) {
	let repAmount = rep.repAmount();
	const repTemp = $cgmzTemp.getReputation(rep._name, rep._category);
	if(repTemp.ranks.length === 0) {
		if(repAmount > repTemp.maxRep) {
			repAmount = repTemp.maxRep;
		}
		if(repAmount < 0) repAmount = 0;
		return {rankId: null, numerator: repAmount, denominator: repTemp.maxRep};
	}
	const rankId = rep.calculateRankIdForDisplay();
	const numerator = rep.calculateRankNumerator();
	const denominator = rep.calculateRankDenominator();
	return {rankId: rankId, numerator: numerator, denominator: denominator};
};
//=============================================================================
// CGMZ_Window_Reputation_Dummy
//-----------------------------------------------------------------------------
// Dummy reputation window to hide display window when not updating
//=============================================================================
function CGMZ_Window_Reputation_Dummy(rect) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_Reputation_Dummy.prototype = Object.create(Window_Base.prototype);
CGMZ_Window_Reputation_Dummy.prototype.constructor = CGMZ_Window_Reputation_Dummy;
//-----------------------------------------------------------------------------
// Create cgmz window options object
//-----------------------------------------------------------------------------
CGMZ_Window_Reputation_Dummy.prototype.CGMZ_createWindowOptions = function() {
	Window_Base.prototype.CGMZ_createWindowOptions.call(this);
	if(CGMZ.Reputations.DisplayWindowskin) this.cgmzOpts.windowskin = CGMZ.Reputations.DisplayWindowskin;
	if(CGMZ.Reputations.DisplayPadding >= 0) this.cgmzOpts.padding = CGMZ.Reputations.DisplayPadding;
	if(CGMZ.Reputations.DisplayBackOpacity >= 0) this.cgmzOpts.backOpacity = CGMZ.Reputations.DisplayBackOpacity;
	if(CGMZ.Reputations.DisplayTone?.Red >= -255) this.cgmzOpts.tone = [CGMZ.Reputations.DisplayTone.Red, CGMZ.Reputations.DisplayTone.Green, CGMZ.Reputations.DisplayTone.Blue];
};
//=============================================================================
// CGMZ_Window_Toast
//-----------------------------------------------------------------------------
// Handle CGMZ Reputation Toasts
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Processing for custom toasts.
//-----------------------------------------------------------------------------
if(Imported.CGMZ_ToastManager) {
const alias_CGMZ_Reputations_processCustomToast = CGMZ_Window_Toast.prototype.processCustomToast;
CGMZ_Window_Toast.prototype.processCustomToast = function(toastObject) {
	alias_CGMZ_Reputations_processCustomToast.call(this, toastObject);
	if(toastObject.hasOwnProperty('CGMZReputationToast')) {
		const line1 = toastObject.lineOne.replace(/%repname/g, toastObject.CGMZRepOptions.repName).replace(/%reprank/g, $cgmzTemp.getReputationRank(toastObject.CGMZRepOptions.rankId).name);
		const line2 = toastObject.lineTwo.replace(/%repname/g, toastObject.CGMZRepOptions.repName).replace(/%reprank/g, $cgmzTemp.getReputationRank(toastObject.CGMZRepOptions.rankId).name);
		this.CGMZ_drawTextLine(line1, 0, 0, this.contents.width, 'center');
		this.CGMZ_drawTextLine(line2, 0, this.lineHeight(), this.contents.width, 'center');
	}
};
}