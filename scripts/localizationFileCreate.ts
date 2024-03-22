function writeFile(name: string, json: string) {
	const FileSystem = require('fs');
	FileSystem.writeFileSync(`./json/${name}.json`, json, (err) => {
		if (err) throw err;
	});
}
type localizeProps = {
	'type': string
	'de':JSON
	'en':JSON
	'es':JSON
	'fr':JSON
	'it':JSON
	'ko':JSON
	'pt-BR':JSON
	'ru':JSON
	'zh-Hans':JSON
	'zh-Hant':JSON
}

function localizationLangs( type: string): void {
	const langList: string[] = [
		'de',
		'en',
		'es',
		'fr',
		'it',
		'ko',
		'pt-BR',
		'ru',
		'zh-Hans',
		'zh-Hant',
	];

	let pathName = (lang: string, type: string): string => {
		return `../temp-data/L10N/${lang}/Pal/DataTable/Text/DT_${type}Text.json`;
	}
	let json: localizeProps = {
		type: "",
		de: undefined,
		en: undefined,
		es: undefined,
		fr: undefined,
		it: undefined,
		ko: undefined,
		"pt-BR": undefined,
		ru: undefined,
		"zh-Hans": undefined,
		"zh-Hant": undefined
	}
	langList.forEach((lang:string) => {
		let data = require(pathName(lang, type));
		json[lang] = data[0].Rows;
	});
	json.type = type
	writeFile(type, JSON.stringify(json));
}

function saveFileCycle(): void {
	const fileList: string[] = [
		// 'BuildObjectCategory',
		// 'BuildObjectDesc',
		// 'DungeonName',
		// 'HumanName',
		// 'ItemDescription',
		// 'ItemName',
		// 'MapObjectName',
		// 'MapRespawnPointInfo',
		// 'NamePrefix',
		// 'NoteDesc',
		// 'NpcTalk',
		// 'PalFirstActivatedInfo',
		// 'PalLongDescription',
		// 'PalName',
		// 'SkillDesc',
		// 'SkillName',
		// 'TechnologyName',
		// 'TutorialMessage_',
		'UI_Common_',
		// 'UniqueNPC',
		// 'WorldMap_Common_',
	];
    fileList.forEach((type:string) => {
        localizationLangs(type)
    })
}

saveFileCycle()