const randomiser=(array,currentNumber)=>{let randomNumber=Math.floor(Math.random()*array.length);if(randomNumber===currentNumber){randomNumber=Math.floor(Math.random()*array.length)} return randomNumber}

function avatarSwapper() {
	const avatars = [{
			src: "/images/collections/avatars/PotatoLords_Persona_Creator.png",
			alt: "Avatar of a caucasian woman with brown hair, eyes closed, tongue sticking out. Wearing an orange jumper with a sun on it.",
		},
		{
			src: "/images/collections/avatars/makowka_character_maker_II.png",
			alt: "Avatar of a woman with brown hair, styled in spacebuns and blonde streaks where men would have sideburns. Wearing blue dungarees with a red jumper with strawberries on it. ",
		},
		{
			src: "/images/collections/avatars/crows_character_creator_.png",
			alt: "Avatar of a caucasian woman with messy brown hair, and blonde streaks where men would have sideburns. Surprised expression with eyes wide and mouth open. Wearing an orange jumper with a rainbow LGBTQIA+ badge.",
		},
		{
			src: "/images/collections/avatars/Ultimate_friends_face_maker.png",
			alt: "Avatar of a caucasian woman with brown hair and blonde streaks where men would have sideburns. Surly expression with slighly drooped eyes and straight lips. Wearing blue dungarees with a green jumper.",
		},
		{
			src: "/images/collections/avatars/nosk.png",
			alt: "Avatar of a caucasian woman with brown hair, happy expression and chunky eyebrows. Muted blueish colour palette, wearing blue dungarees and a grey top. The background is blue spotted with white polka dots",
		},
		{
			src: "/images/collections/avatars/OC_Creator-transparent.png",
			alt: "Avatar of a woman with brown hair, styled in spacebuns and blonde streaks where men would have sideburns. Wearing metal armour.",
		},
		{
			src: "/images/collections/avatars/flowerveil.png",
			alt: "Avatar of a woman with brown ombre hair, excessively big eyelashes and sparkly eyes. Sparkles surround her.",
		},
		{
			src: "/images/collections/avatars/miaw.jpg",
			alt: "Avatar of a caucasian woman with brown hair and pink cheeks. Wearing yellow dungarees and a grey stripey top. She is framed by a branch of leaves starting from the bottom branching up to the left and right.",
		},
		{
			src: "/images/collections/avatars/stardew.png",
			alt: "Avatar of a caucasian woman with brown hair tucked behind her left ear. Wearing pink dungarees and a pink top. In the style of Stardew Valley.",
		},
		{
			src: "/images/collections/avatars/AmandaBaeza.png",
			alt: "Avatar of a caucasian woman with brown hair and button eyes. She is holding a pastry with a smile on it. Wearing a white top with people sitting on her shoulder. Decorate with colourful shapes.",
		},
		{
			src: "/images/collections/avatars/makowka_oc_maker.png",
			alt: "Avatar of a caucasian woman with brown hair, styled in a top bun. Smiling expression with heart, star and smiley facey stickers on her face and surrounded with sparkles. Wearing a black top with star constellations on it.",
		},
		{
			src: "/images/collections/avatars/_friend_maker__by_Rowyn.png",
			alt: "Avatar of a caucasian woman with brown hair, with a leaf sticking out from the top of her head. She is sleeping, shh. Wearing a pink hoodie jumper and a pink blanket. Background is baby blue with clouds.",
		},
		{
			src: "/images/collections/avatars/Cutie_Creator_20.png",
			alt: "Avatar of a caucasian woman with brown hair, styled in spacebuns with a yellow flower. She is winking, with her mouth open, you can see 2 vampire fangs! Wearing a mustard jumper with an egg and a rainbow LGBTQIA+ badge pinned.",
		},
		{
			src: "/images/collections/avatars/scrimsart.png",
			alt: "Avatar of a caucasian woman with brown hair, styled with colourful clips and blonde streaks where men would have sideburns. Wearing pink dungarees and a pink top. In a pixelated style.",
		},
		{
			src: "/images/collections/avatars/anjubatus_heart_hold_char.png",
			alt: "Avatar of a woman with brown hair, styled in spacebuns, a red bow and blonde streaks where men would have sideburns. Wearing blue jumper holding a red heart with a happy face on it.",
		}
		,
		{
			src: "/images/collections/avatars/andycarolan-pink.png",
			alt: "Avatar of a woman with brown hair, styled in spacebuns. Wearing pink dungarees and a pink top. In a simple line illustration style",
		}
	];
	let diceRoll=randomiser(avatars);const avatarContainer=document.getElementsByClassName("swapAvatar")[0];const avatar=avatarContainer.appendChild(document.createElement("img"));avatar.width="200";avatar.height="200";avatar.id="swappedAvatar";avatar.src=avatars[diceRoll].src;avatar.alt=avatars[diceRoll].alt;avatarContainer.classList.add("swapped");document.getElementById("refreshAvatar").addEventListener("click",(event)=>{let reRoll=randomiser(avatars,diceRoll);let avatar=document.getElementById("swappedAvatar");avatar.src=avatars[reRoll].src;avatar.alt=avatars[reRoll].alt});
}
avatarSwapper()