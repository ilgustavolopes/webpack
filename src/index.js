import soma from './calc.js'
import Heading from './components/heading.js';
console.log("Testando o webpack");
soma(20,30);
soma(1,1);
const heading = new Heading();
heading.create("🥎Este titulo é dinamico🥎");
heading.create("Hot reload🐯");
heading.create("θεός ἄγνωστος");