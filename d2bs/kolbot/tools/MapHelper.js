include("json2.js");include("NTItemParser.dbl");include("OOG.js");include("AutoMule.js");include("Gambling.js");include("TorchSystem.js");include("MuleLogger.js");include("common/Attack.js");include("common/Cubing.js");include("common/CollMap.js");include("common/Config.js");include("common/Loader.js");include("common/Misc.js");include("common/Pickit.js");include("common/Pather.js");include("common/Precast.js");include("common/Prototypes.js");include("common/Runewords.js");include("common/Storage.js");include("common/Town.js");function main() {	var action, split;	Config.init();	Pickit.init();	Storage.Init();	addEventListener("scriptmsg", function (msg) {		action = msg;	});	while (true) {		while (!me.gameReady) {			delay(100);		}		if (action) {			if (action.indexOf(",") > -1) {				split = action.split(",");				Pather.moveTo(Number(split[0]), Number(split[1]));			} else {				Pather.moveToExit(Number(action), true);			}			action = false;		}		delay(100);	}}