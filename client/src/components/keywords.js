const keywords = {
  ['Britain']: null,
  ['England']: null,
  ['Italy']: null,
  ['Middle East']: null,
  ['Roman Empire']: null,
  ['Switzerland']: null,
  ['Western Asia']: null,
  ['British Isles']: null,
  ['British isles']: null,
  ['Byzantine Empire']: null,
  ['Byzantium']: null,
  ['Caucasus']: null,
  ['East Asia']: null,
  ['Eastern Asia']: null,
  ['Eastern Europe']: null,
  ['France']: null,
  ['Germany']: null,
  ['Iberia']: null,
  ['Italy']: null,
  ['Mediterranean']: null,
  ['Middle East']: null,
  ['Northern Europe']: null,
  ['Northern and eastern Europe']: null,
  ['Scandinavia']: null,
  ['South Asia']: null,
  ['South West Asia']: null,
  ['Southern Europe']: null,
  ['Spain']: null,
  ['Western Asia']: null,
  ['Western Europe']: null,
  ['Abbasid Caliphate']: null,
  ['Africa']: null,
  ['Africa and Asia']: null,
  ['Agriculture']: null,
  ['America']: null,
  ['Americas']: null,
  ['Anatolia']: null,
  ['Ancient Games']: null,
  ['Ancient Japan']: null,
  ['Arabia']: null,
  ['Architecture']: null,
  ['Armenia']: null,
  ['Art']: null,
  ['Art and science']: null,
  ['Arts']: null,
  ['Arts &amp;amp;amp; sciences']: null,
  ['Arts and Science']: null,
  ['Arts and Sciences']: null,
  ['Arts and culture']: null,
  ['Arts and leisure']: null,
  ['Arts and sciences']: null,
  ['Arts and technology']: null,
  ['Asia']: null,
  ['Asia Minor']: null,
  ['Asia and Africa']: null,
  ['Astronomy']: null,
  ['Bactria']: null,
  ['Balkans']: null,
  ['Bithynia']: null,
  ['Black Sea']: null,
  ['Britain']: null,
  ['Britannia']: null,
  ['British Isles']: null,
  ['Byzantine Empire']: null,
  ['Byzantine Empire and Arab Empire']: null,
  ['Carthage']: null,
  ['Caucasus and the Middle East']: null,
  ['Central America']: null,
  ['China']: null,
  ['Commagene']: null,
  ['Commerce']: null,
  ['Crimea']: null,
  ['Culture']: null,
  ['Culture and Religion']: null,
  ['Dacia']: null,
  ['Demographics']: null,
  ['Demography']: null,
  ['East Asia']: null,
  ['Eastern Asia']: null,
  ['Eastern Roman Empire']: null,
  ['Eastern Roman/Byzantine Empire']: null,
  ['Economics']: null,
  ['Economy']: null,
  ['Education']: null,
  ['Egypt']: null,
  ['Elsewhere']: null,
  ['Environmental change']: null,
  ['Europa']: null,
  ['Europe']: null,
  ['Exploration and Colonization']: null,
  ['Exploration and colonization']: null,
  ['Food and drink']: null,
  ['Gaul']: null,
  ['Georgia']: null,
  ['Germania']: null,
  ['Global']: null,
  ['Greece']: null,
  ['Health']: null,
  ['Hispania']: null,
  ['Illyria']: null,
  ['India']: null,
  ['Inventions']: null,
  ['Ireland']: null,
  ['Israel']: null,
  ['Japan']: null,
  ['Judea']: null,
  ['Korea']: null,
  ['Libya']: null,
  ['Literature']: null,
  ['Macedon']: null,
  ['Market']: null,
  ['Markets']: null,
  ['Medicine']: null,
  ['Mesoamerica']: null,
  ['Meteorology']: null,
  ['Mexico']: null,
  ['Microhistory']: null,
  ['Middle East']: null,
  ['Mongolia']: null,
  ['Music']: null,
  ['Nature']: null,
  ['Near East']: null,
  ['New Zealand']: null,
  ['North Africa']: null,
  ['North Africa and the Middle East']: null,
  ['North America']: null,
  ['Numidia']: null,
  ['Oceania']: null,
  ['Osroene']: null,
  ['Other events']: null,
  ['Pacific']: null,
  ['Palestine']: undefined,
  ['Parthia']: null,
  ['Pergamum']: null,
  ['Persia']: null,
  ['Persian and Byzantine Empires']: null,
  ['Philosophy']: null,
  ['Physics']: null,
  ['Poetry']: null,
  ['Pontus']: null,
  ['Religion']: null,
  ['Roman Empire']: null,
  ['Roman Republic']: null,
  ['Roman Republic/Empire']: null,
  ['Roman empire']: null,
  ['Roman republic']: null,
  ['Science']: null,
  ['Science and technology']: null,
  ['Seleucid Empire']: null,
  ['Sicily']: null,
  ['South America']: null,
  ['Southeast Asia']: null,
  ['Spain']: null,
  ['Sport in the Roman Empire']: null,
  ['Sri Lanka']: null,
  ['Sub-Saharan Africa']: null,
  ['Syracuse']: null,
  ['Syria']: null,
  ['Syria and Judea']: null,
  ['Technics']: null,
  ['Technology']: null,
  ['The Balkans']: null,
  ['The Eighth Crusade']: null,
  ['The Middle East']: null,
  ['Thrace']: null,
  ['Transportation']: null,
  ['Trivia']: null,
  ['Undated']: null,
  ['Vietnam']: null,
  ['Visigothic kingdom']: null,
  ['War and politics']: null,
  ['World']: null
};

// const keywords = {
//   ['Britain']: null,
//   ['England']: null,
//   ['Italy']: null,
//   ['Middle East']: null,
//   ['Roman Empire']: null,
//   ['Switzerland']: null,
//   ['Western Asia']: null,
//   ['British Isles']: null,
//   ['British isles']: null,
//   ['Byzantine Empire']: null,
//   ['Byzantium']: null,
//   ['Caucasus']: null,
//   ['East Asia']: null,
//   ['Eastern Asia']: null,
//   ['Eastern Europe']: null,
//   ['France']: null,
//   ['Germany']: null,
//   ['Iberia']: null,
//   ['Italy']: null,
//   ['Mediterranean']: null,
//   ['Middle East']: null,
//   ['Northern Europe']: null,
//   ['Northern and eastern Europe']: null,
//   ['Scandinavia']: null,
//   ['South Asia']: null,
//   ['South West Asia']: null,
//   ['Southern Europe']: null,
//   ['Spain']: null,
//   ['Western Asia']: null,
//   ['Western Europe']: null,
//   ['Abbasid Caliphate']: null,
//   ['Africa']: null,
//   ['Africa and Asia']: null,
//   ['Agriculture']: null,
//   ['America']: null,
//   ['Americas']: null,
//   ['Anatolia']: null,
//   ['Ancient Games']: null,
//   ['Ancient Japan']: null,
//   ['Arabia']: null,
//   ['Architecture']: null,
//   ['Armenia']: null,
//   ['Art']: null,
//   ['Art and science']: null,
//   ['Arts']: null,
//   ['Arts &amp;amp;amp; sciences']: null,
//   ['Arts and Science']: null,
//   ['Arts and Sciences']: null,
//   ['Arts and culture']: null,
//   ['Arts and leisure']: null,
//   ['Arts and sciences']: null,
//   ['Arts and technology']: null,
//   ['Asia']: null,
//   ['Asia Minor']: null,
//   ['Asia and Africa']: null,
//   ['Astronomy']: null,
//   ['Bactria']: null,
//   ['Balkans']: null,
//   ['Bithynia']: null,
//   ['Black Sea']: null,
//   ['Britain']: null,
//   ['Britannia']: null,
//   ['British Isles']: null,
//   ['Byzantine Empire']: null,
//   ['Byzantine Empire and Arab Empire']: null,
//   ['Carthage']: null,
//   ['Caucasus and the Middle East']: null,
//   ['Central America']: null,
//   ['China']: null,
//   ['Commagene']: null,
//   ['Commerce']: null,
//   ['Crimea']: null,
//   ['Culture']: null,
//   ['Culture and Religion']: null,
//   ['Dacia']: null,
//   ['Demographics']: null,
//   ['Demography']: null,
//   ['East Asia']: null,
//   ['Eastern Asia']: null,
//   ['Eastern Roman Empire']: null,
//   ['Eastern Roman/Byzantine Empire']: null,
//   ['Economics']: null,
//   ['Economy']: null,
//   ['Education']: null,
//   ['Egypt']: null,
//   ['Elsewhere']: null,
//   ['Environmental change']: null,
//   ['Europa']: null,
//   ['Europe']: null,
//   ['Exploration and Colonization']: null,
//   ['Exploration and colonization']: null,
//   ['Food and drink']: null,
//   ['Gaul']: null,
//   ['Georgia']: null,
//   ['Germania']: null,
//   ['Global']: null,
//   ['Greece']: null,
//   ['Health']: null,
//   ['Hispania']: null,
//   ['Illyria']: null,
//   ['India']: null,
//   ['Inventions']: null,
//   ['Ireland']: null,
//   ['Israel']: null,
//   ['Japan']: null,
//   ['Judea']: null,
//   ['Korea']: null,
//   ['Libya']: null,
//   ['Literature']: null,
//   ['Macedon']: null,
//   ['Market']: null,
//   ['Markets']: null,
//   ['Medicine']: null,
//   ['Mesoamerica']: null,
//   ['Meteorology']: null,
//   ['Mexico']: null,
//   ['Microhistory']: null,
//   ['Middle East']: null,
//   ['Mongolia']: null,
//   ['Music']: null,
//   ['Nature']: 'By topics',
//   ['Near East']: null,
//   ['New Zealand']: null,
//   ['North Africa']: null,
//   ['North Africa and the Middle East']: null,
//   ['North America']: null,
//   ['Numidia']: null,
//   ['Oceania']: null,
//   ['Osroene']: null,
//   ['Other events']: null,
//   ['Pacific']: null,
//   ['Palestine']: undefined,
//   ['Parthia']: null,
//   ['Pergamum']: null,
//   ['Persia']: null,
//   ['Persian and Byzantine Empires']: null,
//   ['Philosophy']: null,
//   ['Physics']: null,
//   ['Poetry']: null,
//   ['Pontus']: null,
//   ['Religion']: null,
//   ['Roman Empire']: null,
//   ['Roman Republic']: null,
//   ['Roman Republic/Empire']: null,
//   ['Roman empire']: null,
//   ['Roman republic']: null,
//   ['Science']: null,
//   ['Science and technology']: null,
//   ['Seleucid Empire']: null,
//   ['Sicily']: null,
//   ['South America']: null,
//   ['Southeast Asia']: null,
//   ['Spain']: null,
//   ['Sport in the Roman Empire']: null,
//   ['Sri Lanka']: null,
//   ['Sub-Saharan Africa']: null,
//   ['Syracuse']: null,
//   ['Syria']: null,
//   ['Syria and Judea']: null,
//   ['Technics']: null,
//   ['Technology']: null,
//   ['The Balkans']: null,
//   ['The Eighth Crusade']: null,
//   ['The Middle East']: null,
//   ['Thrace']: null,
//   ['Transportation']: null,
//   ['Trivia']: null,
//   ['Undated']: 'December',
//   ['Vietnam']: null,
//   ['Visigothic kingdom']: null,
//   ['War and politics']: null,
//   ['World']: null,
// }

export default keywords;