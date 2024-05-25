import React from "react";
import ImageCardk from "./ImageCardk";
import "./Kishor.css";

const imagesWithText = [
	{ imageName: "1.jpg" },
	{ imageName: "2.jpg" },
	{ imageName: "3.jpg" },
];

const imagesWithText2 = [{ imageName: "4.jpg" }, { imageName: "5.jpg" }];

const imagesWithText3 = [{ imageName: "6.jpg" }];

const imagesWithText4 = [
	{ imageName: "8.jpg" },
	{ imageName: "9.jpg" },
	{ imageName: "10.jpg" },
	{ imageName: "11.jpg" },
];

const imagesWithText5 = [{ imageName: "12.jpg" }, { imageName: "13.jpg" }];

const imagesWithText6 = [{ imageName: "14.jpg" }, { imageName: "15.jpg" }];

const imagesWithText7 = [
	{ imageName: "16.jpg" },
	{ imageName: "17.jpg" },
	{ imageName: "18.jpg" },
	{ imageName: "19.jpg" },
];

const Kishor = () => {
	return (
		<div>
			<h2 className='headingt'>Animal Symbols</h2>
			<div className='kishor'>
				{imagesWithText.map((item, index) => (
					<ImageCardk
						key={index}
						imageName={item.imageName}
						height='300px'
						width='300px'
					/>
				))}
				<div className='text-content'>
					<p>
						<strong>Contextual Variance:</strong> Symbols on pottery reflect
						public, regional ideologies, while those on seals indicate more
						exclusive, possibly elite, or ritualistic contexts.
					</p>
					<p>
						<strong>Horn Characteristics:</strong> Horn shapes and sizes offer
						clues to the animal's identity; large, sweeping horns suggest wild
						water buffalo, while smaller, curly horns may indicate domestic
						varieties.
					</p>
					<p>
						<strong>Regional Depictions:</strong> Comparing symbols across sites
						reveals regional variations, such as horn designs or curvature,
						aiding in understanding the animal's significance within local
						cultural contexts.
					</p>
				</div>
			</div>
			<h2 className='headingt'>Fish Symbols</h2>
			<div className='kishor'>
				{imagesWithText2.map((item, index) => (
					<ImageCardk
						key={index}
						imageName={item.imageName}
						height='300px'
						width='300px'
					/>
				))}

				<div className='text-content'>
					<p>
						Parpola associates the 'dot + fish' sign with the Harappan
						proto-form of Durga, the goddess of fertility and victory in war.
					</p>
					<p>
						He suggests that Rohini (Aldeberan) is the star most likely
						associated with this goddess, based on his exploration of Hindu
						mythology.
					</p>
					<p>
						The association between Rohini (the 'red star') and the carp
						('rohita', meaning 'the red fish') forms the basis of identification
						for the 'fish' sign.
					</p>
					<p>
						Parpola interprets the mark inside the 'fish' sign as the auspicious
						red tilaka mark worn by women, equating it with Dravidian 'pottu'
						(meaning '(red) dot, drop').
					</p>
					<p>
						However, linguistic challenges arise, as 'pottu meen' is not
						attested in Dravidian with the meaning 'star Rohini', and 'pottu'
						itself does not inherently mean 'red' in Dravidian languages.
					</p>
					<p>
						Various interpretations exist regarding the significance of the
						'fish' symbol, including its representation as a trade item
						quantity, a weight standard, or a religious motif.
					</p>
					<p>
						Scholars have explored the 'fish' symbol's potential as an ideogram,
						suggesting it may have held religious or political significance
						within the Indus Valley society.
					</p>
					<p>
						The symbol's association with the Matsya kingdom, both in literary
						and archaeological contexts, suggests a possible connection between
						the 'fish' symbol and dynastic or territorial identities.
					</p>
					<p>
						The prevalence of fish symbolism extends beyond the Indus Valley
						civilization, with examples found in historic kingdoms like the
						Pāṇḍyas, indicating a continued cultural significance across
						different time periods and regions in South Asia.
					</p>
				</div>
			</div>
			<h2 className='headingt'>Agriculture Symbols</h2>
			<div className='kishor'>
				{imagesWithText3.map((item, index) => (
					<ImageCardk
						key={index}
						imageName={item.imageName}
						height='300px'
						width='300px'
					/>
				))}
				<div className='text-content'>
					<p>
						<strong>Food crops:</strong> Harappans cultivated bread wheat,
						barley, sesame, peas, melons, date-palm, species of Brassica. Cotton
						was an important crop and the centre of origin of Gossypium
						arboretum lies in the Indus Valley.
					</p>
					<p>
						<strong>Wheat:</strong> Among the cereals, wheat and barley were
						recorded from Harappa and Mohenjo-daro. Helbaek has pointed out that
						wheat and barley have been cultivated together from the very
						beginning of village- farming in western Asia.
					</p>
					<p>
						<strong>Barley:</strong> All barleys, wild and cultivated, belong to
						the same potentially interfertile population and are grouped under
						one species, Hordeum vulgare.
					</p>
					<p>
						<strong>Rice:</strong> Rice is native to South and East Asia-
						including Indus region and the Ganges valley. Cultivation of rice
						involved several different centres of domestication.
					</p>
				</div>
			</div>
			<h2 className='headingt'>Numeral Symbols</h2>
			<div className='kishor'>
				{imagesWithText4.map((item, index) => (
					<ImageCardk
						key={index}
						imageName={item.imageName}
						height='300px'
						width='100px'
					/>
				))}
			</div>
			<h2 className='headingt'>Crop/Star & Road Symbols</h2>
			<div className='kishor'>
				{imagesWithText5.map((item, index) => (
					<ImageCardk
						key={index}
						imageName={item.imageName}
						height='300px'
						width='300px'
					/>
				))}
				<div className='text-content'>
					<p>
						<strong>Pictorial Interpretations:</strong> Basic signs like "share
						(as grain)" (Sign 137) and "crop" (Sign 162) are analyzed, with
						variants and compound signs providing clues to their meanings. For
						example, Sign 137 depicts stalks laden with grain arranged in X-like
						form to denote "share (as grain)."
					</p>
					<p>
						<strong>Modifiers and Compound Signs:</strong> Elements like "sky,"
						"one-eighth," and "roof" modify basic signs, yielding compound signs
						indicating different aspects of agricultural distribution, such as
						"god's share of grain/crop" or "upper (landlord's) share of
						grain/crop."
					</p>
					<p>
						<strong>Bi-lingual Parallels:</strong> Bi-lingual parallels from
						Dravidian and Indo-Aryan languages, such as Tamil and Malayalam,
						support the proposed ideographic identification of the signs,
						indicating cultural continuity.
					</p>
					<p>
						<strong>Survivals in Later Periods:</strong> Some agricultural signs
						from the Indus script are found as isolated symbols in pottery
						graffiti from later Chalcolithic and Megalithic periods, suggesting
						continuity in agricultural practices.
					</p>
					<p>
						<strong>Agricultural Implements:</strong> The paper also identifies
						pictorial signs representing agricultural implements, such as
						harrows, and suggests their symbolic use in the script, although not
						in their literal sense.
					</p>
				</div>
			</div>
			<h2 className='headingt'>Enclosed Symbols</h2>
			<div className='kishor'>
				{imagesWithText6.map((item, index) => (
					<ImageCardk
						key={index}
						imageName={item.imageName}
						height='300px'
						width='300px'
					/>
				))}
			</div>
			<div className='kishor'>
				{imagesWithText7.map((item, index) => (
					<ImageCardk
						key={index}
						imageName={item.imageName}
						height='300px'
						width='100px'
					/>
				))}
			</div>
		</div>
	);
};

export default Kishor;
