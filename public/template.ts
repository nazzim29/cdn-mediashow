import { Template } from "./models";

const templateMap = new Map();

export function CTemplate(templateUsed) {
	if (typeof templateUsed == "string") return templateMap.get(templateUsed);
	else {
		var t: Array<{ type: "adblock" | "cookie"; template: Template }>;
		t = templateUsed.map((el) => ({
			type: el.type,
			template: templateMap.get(el.name),
		}));
		return t;
	}
}

//  Template par défaut
templateMap.set("default", {
	elem: "div",
	attrs: {
		class: ["overlay"],
	},
	childrens: [
		{
			elem: "div",
			attrs: {
				class: ["popin"],
			},
			childrens: [
				{
					elem: "img",
					attrs: {
						src: "http://cdn.50570-adi.tech/static/img/times-solid1.png",
						id: "btn-close",
						class: ["fille-close", "hide"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["item"],
					},
					childrens: [
						{
							elem: "div",
							attrs: {
								class: ["img"],
							},
							childrens: [
								{
									elem: "img",
									attrs: {
										src: "http://cdn.50570-adi.tech/static/img/0866c22c00613e86bcf774a9f4af8b34.jpg",
									},
								},
							],
						},
					],
				},
				{
					elem: "div",
					attrs: {
						class: ["item", "texts"],
					},
					childrens: [
						{
							elem: "div",
							attrs: { id: "wrapper" },
							childrens: [
								{
									elem: "div",
									attrs: { class: ["links"] },
									childrens: [
										{
											elem: "a",
											attrs: {
												class: ["btn", "info"],
												href: "https://beta1.mediashow.fr/?page=Ambiances%20f%C3%A9minines&widget=moreinformation",
												text: "En savoir plus",
											},
										},
										{
											elem: "a",
											attrs: {
												class: ["btn", "cta"],
												href: "https://beta1.mediashow.fr/?page=Ambiances%20f%C3%A9minines",
												text: "Découvrir Mediashow",
											},
										},
									],
								},
								{
									elem: "div",
									attrs: {
										id: "logos",
									},
								},
							],
						},
					],
				},
			],
		},
	],
});

// template footer page
templateMap.set("characters", {
	elem: "div",
	attrs: {
		class: ["footer_overlay"],
	},
	childrens: [
		{
			elem: "div",
			attrs: {
				class: ["footer_widget", "move-down"],
			},
			childrens: [
				{
					elem: "div",
					attrs: {
						class: ["footer_div_base"],
					},
					childrens: [
						{
							elem: "div",
							attrs: {
								class: ["footer_div_Left"],
							},
							childrens: [
								{
									elem: "h1",
									attrs: {
										text: "Bienvenue sur LePoint.fr",
										class: ["footer_Title_Left"],
									},
								},
								{
									elem: "h2",
									attrs: {
										text: "Vous préférez ne pas avoir de publicité ici ? Je peux comprendre. J’ai une solution pour vous fournir nos contenus et services toujours gratuitement !\n",
										class: ["footer_Text_Left"],
									},
								},
							],
						},
						{
							elem: "div",
							attrs: {
								class: ["footer_div_Right"],
							},
							childrens: [
								{
									elem: "div",
									attrs: {
										class: ["characters-div_close"],
									},
									childrens: [
										{
											elem: "img",
											attrs: {
												src: "http://cdn.50570-adi.tech/static/img/times-solid1.png",
												id: "btn-close",
												class: ["characters-close", "hide"],
											},
										},
									],
								},
								{
									elem: "img",
									attrs: {
										class: ["footer-logo_mediashow"],
										src: "http://cdn.50570-adi.tech/static/img/logo.png",
										alt: "Mediashow",
									},
								},
								{
									elem: "img",
									attrs: {
										class: ["footer-logo_company"],
										src: "data:image/png;base64,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",
										alt: "LePoint",
									},
								},
								{
									elem: "text",
									attrs: {
										text: "En visitant notre plateforme de découverte des médias et des marques, très occasionnellement, 1 fois par semaine environ, vous aurez accès à vos sites favoris, partenaires de Mediashow, sans publicité. Essayez, vous verrez.",
										class: ["footer_Text_Right"],
									},
								},
								{
									elem: "div",
									attrs: {
										class: ["footer-buttons"],
									},
									childrens: [
										{
											elem: "a",
											attrs: {
												id: "btn-learn",
												class: ["footer-plus"],
											},
											childrens: [
												{
													elem: "a",
													attrs: {
														class: ["footer-p_plus"],
														text: "En savoir plus",
														href: "https://beta1.mediashow.fr/?page=Technologies%20et%20Soci%C3%A9t%C3%A9A&widget=moreinformation",
													},
												},
											],
										},
										{
											elem: "a",
											attrs: {
												id: "btn-ok",
												class: ["footer-discover"],
												href: "https://beta1.mediashow.fr/?page=Divertissements%20du%20moment",
											},
											childrens: [
												{
													elem: "p",
													attrs: {
														class: ["footer-p_discover"],
														text: "Ok ? J'essaye",
													},
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
});
// 3 personnages type widget11
templateMap.set("character", {
	elem: "div",
	attrs: {
		class: ["overlay"],
	},
	childrens: [
		{
			elem: "div",
			attrs: {
				class: ["characters-widget", "move-down"],
			},
			childrens: [
				{
					elem: "div",
					attrs: {
						class: ["characters-div_close"],
					},
					childrens: [
						{
							elem: "img",
							attrs: {
								src: "http://cdn.50570-adi.tech/static/img/times-solid1.png",
								id: "btn-close",
								class: ["characters-close", "hide"],
							},
						},
					],
				},
				{
					elem: "div",
					attrs: {
						class: ["characters-div_img_header"],
					},
					childrens: [
						{
							elem: "img",
							attrs: {
								alt: "prancheta",
								src: "http://cdn.50570-adi.tech/static/img/prancheta.png",
								class: ["characters-img_header"],
							},
						},
					],
				},
				{
					elem: "h3",
					attrs: {
						text: "Bienvenue sur presse-citron !",
						class: ["characters-titleWidget"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["characters-pWidget_texte"],
					},
					childrens: [
						{
							elem: "p",
							attrs: {
								class: ["characters-pWidget1"],
								text: "Vous aimez presse-citron! Et vous utilisez un Adblocker !!! Pas de souci, on vous comprend",
							},
						},
						{
							elem: "p",
							attrs: {
								text: "Nous avons quelque chose d'original à vous proposer pour nous financer ! Sur un autre onglet, quand vous voudrez, considérez des messages des marques et des médias. Cela nous financera.",
								class: ["characters-pWidget2"],
							},
						},
					],
				},
				{
					elem: "div",
					attrs: {
						class: ["characters-buttons"],
					},
					childrens: [
						{
							elem: "a",
							attrs: {
								id: "btn-learn",
								class: ["characters-plus"],
							},
							childrens: [
								{
									elem: "p",
									attrs: {
										class: ["characters-p_plus"],
										text: "En savoir plus",
									},
								},
							],
						},
						{
							elem: "a",
							attrs: {
								id: "btn-ok",
								class: ["characters-discover"],
							},
							childrens: [
								{
									elem: "p",
									attrs: {
										class: ["characters-p_discover"],
										text: "Ok, j'essaie",
									},
								},
							],
						},
					],
				},
				{
					elem: "div",
					attrs: {
						class: ["characters-logos"],
					},
					childrens: [
						{
							elem: "img",
							attrs: {
								class: ["characters-logo"],
								src: "http://cdn.50570-adi.tech/static/img/sprite 1.png",
								alt: "logo",
							},
						},
						{
							elem: "img",
							attrs: {
								class: ["characters-logo_mediashow"],
								src: "http://cdn.50570-adi.tech/static/img/logo.png",
								alt: "Mediashow",
							},
						},
					],
				},
			],
		},
	],
});

templateMap.set("roux", {
	elem: "div",
	attrs: {
		class: ["overlay"],
	},
	childrens: [
		{
			elem: "div",
			attrs: {
				class: ["roux-widget", "move-down"],
			},
			childrens: [
				{
					elem: "p",
					attrs: {
						text: "Vous utilisez  un bloqueur de publicité",
						class: ["roux-titleWidget"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "ce n’est pas un problème",
						class: ["roux-no-pb"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "Mais pour nous rémunérer,  pouvez-vous visiter  le catalogue des marques qui nous sponsorisent ?",
						class: ["roux-catalogue"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["roux-div_close"],
					},
					childrens: [
						{
							elem: "img",
							attrs: {
								src: "http://cdn.50570-adi.tech/static/img/times-solid1.png",
								id: "btn-close",
								class: ["roux-close", "hide"],
							},
						},
					],
				},
				{
					elem: "img",
					attrs: {
						alt: "roux",
						src: "http://cdn.50570-adi.tech/static/img/Roux.png",
						class: ["roux-img"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["roux-btns"],
					},
					childrens: [
						{
							elem: "a",
							attrs: {
								target: ["_blank"],
								href: [
									"https://beta1.mediashow.fr/page/6300f394-f26e-4b71-b571-6b1be5af2348/encelad",
								],
								class: ["roux-btn-ok"],
								id: "btn-ok",
							},
							childrens: [
								{
									elem: "p",
									attrs: {
										class: ["roux-p-ok"],
										text: "Ok",
									},
								},
							],
						},
						{
							elem: "a",
							attrs: {
								href: [
									"https://beta1.mediashow.fr/page/6300f394-f26e-4b71-b571-6b1be5af2348/encelad",
								],
								target: ["_blank"],
								class: ["roux-btn-understand"],
								id: "btn-learn",
							},
							childrens: [
								{
									elem: "p",
									attrs: {
										class: ["roux-p-understand"],
										text: "Je comprends",
									},
								},
							],
						},
					],
				},
				{
					elem: "a",
					attrs: {
						href: ["https://mediashow.fr/corporate"],
						target: "_blank",
						text: "Mediashow.fr",
						class: ["roux-link"],
					},
				},
			],
		},
		// {
		// 	elem: "script",
		// 	attrs: {
		// 		text: `
		// 		<!-- Quantcast Tag -->
		// 		<script type="text/javascript">
		// 			window._qevents = window._qevents || [];

		// 			(function() {
		// 			var elem = document.createElement('script');
		// 			elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
		// 			elem.async = true;
		// 			elem.type = "text/javascript";
		// 			var scpt = document.getElementsByTagName('script')[0];
		// 			scpt.parentNode.insertBefore(elem, scpt);
		// 			})();

		// 			window._qevents.push({
		// 			qacct:"p-RDnL0rHdufZZY",
		// 			uid:"mohamed.drissi123@yahoo.com"
		// 			});
		// 		</script>
		// 		<!-- End Quantcast tag -->
		// 		`,
		// 	}

		// }
	],
});

templateMap.set("roux-test", {
	elem: "div",
	attrs: {
		class: ["overlay"],
	},
	childrens: [
		{
			elem: "div",
			attrs: {
				class: ["roux-widget", "move-down"],
			},
			childrens: [
				{
					elem: "p",
					attrs: {
						text: "Vous utilisez un bloqueur de publicité ?",
						class: ["roux-titleWidget"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "ce n'est pas un probleme !",
						class: ["roux-no-pb"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "Mais pour nous rémunérer, pouvez-vous visiter le catalogue des marques qui nous sponsorisent ?",
						class: ["roux-catalogue"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["roux-div_close"],
					},
					childrens: [
						{
							elem: "img",
							attrs: {
								src: "http://cdn.50570-adi.tech/static/img/times-solid1.png",
								id: "btn-close",
								class: ["roux-close", "hide"],
							},
						},
					],
				},
				{
					elem: "img",
					attrs: {
						alt: "roux",
						src: "http://cdn.50570-adi.tech/static/img/Roux.png",
						class: ["roux-img"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["roux-btns"],
					},
					childrens: [
						{
							elem: "a",
							attrs: {
								href: [
									"https://dev-frontoffice.mediashow.fr/?page=Technologies%20et%20Soci%C3%A9t%C3%A9",
								],
								target: ["_blank"],
								class: ["roux-btn-understand"],
							},
							childrens: [
								{
									elem: "p",
									attrs: {
										class: ["roux-p-understand"],
										text: "Je comprends",
									},
								},
							],
						},
						{
							elem: "a",
							attrs: {
								target: ["_blank"],
								href: [
									"https://dev-frontoffice.mediashow.fr/?page=Technologies%20et%20Soci%C3%A9t%C3%A9",
								],
								class: ["roux-btn-ok"],
							},
							childrens: [
								{
									elem: "p",
									attrs: {
										class: ["roux-p-ok"],
										text: "Ok",
									},
								},
							],
						},
					],
				},
				{
					elem: "a",
					attrs: {
						href: ["https://mediashow.fr/corporate/"],
						target: "_blank",
						text: "mediashow.fr",
						class: ["roux-link"],
					},
				},
			],
		},
	],
});

templateMap.set("mauve", {
	elem: "div",
	attrs: {
		class: ["overlay"],
	},
	childrens: [
		{
			elem: "div",
			attrs: {
				class: ["mauve-main", "move-down"],
			},
			childrens: [
				{
					elem: "p",
					attrs: {
						text: "Vous utilisez <br> un bloqueur de publicité",
						class: ["mauve-title"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "ce n'est pas un probléme",
						class: ["mauve-subTitle"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "Pour nous rémunérer,  pouvez-vous visiter <br> le catalogue des marques qui nous <br> sponsorisent ?",
						class: ["mauve-title", "mauve-paragraphe"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "Pour nous rémunérer,  pouvez-vous visiter le catalogue des marques qui nous sponsorisent ?",
						class: ["mauve-title", "mauve-paragraphe2"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["mauve-flex-container"],
					},
					childrens: [
						{
							elem: "a",
							attrs: {
								target: ["_blank"],
								href: [""],
								id:"btn-ok",
								class: [""],
							},
							childrens: [
								{
									elem: "p",
									attrs: {
										class: ["mauve-btn", "mauve-btn-droit"],
										text: "OK",
									},
								},
							],
						},
						{
							elem: "a",
							attrs: {
								target: ["_blank"],
								id:"btn-learn",
								href: [""],
								class: [""],
							},
							childrens: [
								{
									elem: "p",
									attrs: {
										class: ["mauve-btn", "mauve-btn-gauche"],
										text: "je comprends",
									},
								},
							],
						},
					],
				},
				{
					elem: "div",
					attrs: {
						class: [""],
					},
					childrens: [
						{
							elem: "a",
							attrs: {
								target: ["_blank"],
								href: ["https://mediashow.fr/corporate/"],
								class: [""],
							},
							childrens: [
								{
									elem: "p",
									attrs: {
										class: ["mauve-mediashow-link"],
										text: "mediashow.fr",
									},
								},
							],
						},
					],
				},
			],
		},
	],
});

templateMap.set("cookie-blanc", {
	elem: "div",
	attrs: {
		class: ["overlay"],
	},
	childrens: [
		{
			elem: "div",
			attrs: {
				class: ["cookie-blanc-widget", "move-down"],
			},
			childrens: [
				{
					elem: "p",
					attrs: {
						text: "Vous préférez ne pas avoir de cookie?",
						class: ["cookie-blanc-titleWidget"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["cookie-blanc-div_close", "hide"],
						id: "btn-close",
					},
					childrens: [
						{
							elem: "img",
							attrs: {
								src: "http://cdn.50570-adi.tech/static/img/times-solid1.png",
								class: ["cookie-blanc-close"],
							},
						},
					],
				},
				{
					elem: "p",
					attrs: {
						text: "ce n'est pas un problème, mais",
						class: ["cookie-blanc-no-pb"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "Pour nous rémunérer, pouvez-vous visiter, sur un autre onglet,  le catalogue des marques qui nous sponsorisent ?",
						class: ["cookie-blanc-catalogue"],
					},
				},
				{
					elem: "img",
					attrs: {
						alt: "cookie",
						src: "https://cdn.50570-adi.tech/static/img/cookie-blanc.png",
						class: ["cookie-blanc-img"],
					},
				},
				{
					elem: "img",
					attrs: {
						alt: "cookie",
						src: "https://cdn.50570-adi.tech/static/img/cookie-blanc.png",
						class: ["cookie-blanc-img-mob"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["cookie-blanc-btns"],
					},
					childrens: [
						{
							elem: "a",
							attrs: {
								id: "btn-ok",
								target: ["_blank"],
								href: [
									"https://beta1.mediashow.fr/page/6300f394-f26e-4b71-b571-6b1be5af2348/encelad",
								],
								class: ["cookie-blanc-btn-ok"],
							},
							childrens: [
								{
									elem: "p",
									attrs: {
										class: ["cookie-blanc-p-ok"],
										text: "Ok, j'essaye",
									},
								},
							],
						},
						{
							elem: "a",
							attrs: {
								href: [
									"https://beta1.mediashow.fr/page/6300f394-f26e-4b71-b571-6b1be5af2348/encelad",
								],
								target: ["_blank"],
								id: "btn-learn",
								class: ["cookie-blanc-btn-understand"],
							},
							childrens: [
								{
									elem: "p",
									attrs: {
										class: ["cookie-blanc-p-understand"],
										text: "Ok, je comprends",
										id: "btn-learn",
									},
								},
							],
						},
					],
				},
				{
					elem: "a",
					attrs: {
						href: ["https://mediashow.fr/corporate"],
						target: "_blank",
						text: "mediashow.fr",
						class: ["cookie-blanc-link"],
					},
				},
			],
		},
	],
});

templateMap.set("ne-partez-pas", {
	elem: "div",
	attrs: {
		class: ["overlay"],
	},
	childrens: [
		{
			elem: "div",
			attrs: {
				class: ["ne-partez-pas", "move-down"],
			},
			childrens: [
				{
					elem: "p",
					attrs: {
						text: "Juste une seconde",
						class: ["just-one-sec"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "Ne partez pas si vite, visitez le catalogue des medias et des marques?",
						class: ["visite-catalogue"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "Vous y ferez des découvertes inattendues et vous nous rémunérerez par la même occasion",
						class: ["discover"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["btns-container"],
					},
					childrens: [
						{
							elem: "a",
							attrs: {
								id: "btn-ok",
								target: ["_blank"],
								href: [
									"https://beta1.mediashow.fr/page/6300f394-f26e-4b71-b571-6b1be5af2348/encelad",
								],
								class: [""],
								text: "Ok",
							},
						},
						{
							elem: "a",
							attrs: {
								id: "btn-learn",
								target: ["_blank"],
								href: [
									"https://beta1.mediashow.fr/page/6300f394-f26e-4b71-b571-6b1be5af2348/encelad",
								],
								class: [""],
								text: "Je comprends",
							},
						},
					],
				},
				{
					elem: "div",
					attrs: {
						class: ["ne-partez-pas-div_close"],
					},
					childrens: [
						{
							elem: "img",
							attrs: {
								src: "https://cdn.50570-adi.tech/assets/img/close.png",
								id: "btn-close",
								class: ["roux-close", "hide"],
							},
						},
					],
				},
				{
					elem: "a",
					attrs: {
						text: "mediashow.fr",
						id: "link-mediashow",
						target: ["_blank"],
						href: ["https://mediashow.fr/corporate"],
						class: ["link"],
					},
				},
			],
		},
	],
});

templateMap.set("banner", {
	elem: "div",
	attrs: {
		class: ["overlay"],
	},
	childrens: [
		{
			elem: "div",
			attrs: {
				class: ["banner", "move-down"],
			},
			childrens: [
				{
					elem: "p",
					attrs: {
						text: "Si vous préférez voir moins de  publicité sur ce site",
						class: ["just-one-sec"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "Visitez le catalogue des médias et des marques",
						class: ["visite-catalogue"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "cela nous rémunérera d’une autre façon",
						class: ["discover"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["btns-container"],
					},
					childrens: [
						{
							elem: "a",
							attrs: {
								id: "btn-ok",
								target: ["_blank"],
								href: [
									"https://beta1.mediashow.fr/page/6300f394-f26e-4b71-b571-6b1be5af2348/encelad",
								],
								class: [""],
								text: "Ok",
							},
						},
						{
							elem: "a",
							attrs: {
								id: "btn-learn",
								target: ["_blank"],
								href: [
									"https://beta1.mediashow.fr/page/6300f394-f26e-4b71-b571-6b1be5af2348/encelad",
								],
								class: [""],
								text: "Je comprends",
							},
						},
					],
				},
				{
					elem: "a",
					attrs: {
						text: "Mediashow.fr",
						id: "link-mediashow",
						target: ["_blank"],
						href: ["https://mediashow.fr/corporate"],
						class: ["link"],
					},
				},
			],
		},
	],
});

templateMap.set("premium", {
	elem: "div",
	attrs: {
		class: ["overlay"],
	},
	childrens: [
		{
			elem: "div",
			attrs: {
				class: ["premium", "move-down"],
			},
			childrens: [
				{
					elem: "p",
					attrs: {
						text: "Pour accéder à cet article PREMIUM",
						class: ["premium-access-title"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "Pouvez-vous visiter le catalogue des marques qui nous sponsorisent ?",
						class: ["visite-us"],
					},
				},
				{
					elem: "p",
					attrs: {
						text: "Vous y ferez de belles découvertes !",
						class: ["belle-decouverte"],
					},
				},
				{
					elem: "div",
					attrs: {
						class: ["premium-div_close"],
					},
					childrens: [
						{
							elem: "img",
							attrs: {
								src: "https://cdn.50570-adi.tech/assets/img/close.png",
								id: "btn-close",
								class: ["roux-close", "hide"],
							},
						},
					],
				},
				{
					elem: "div",
					attrs: {
						class: ["btns-container"],
					},
					childrens: [
						{
							elem: "a",
							attrs: {
								id: "btn-ok",
								target: ["_blank"],
								href: [
									"https://beta1.mediashow.fr/page/6300f394-f26e-4b71-b571-6b1be5af2348/encelad",
								],
								class: [""],
								text: "Ok",
							},
						},
						{
							elem: "a",
							attrs: {
								id: "btn-learn",
								target: ["_blank"],
								href: [
									"https://beta1.mediashow.fr/page/6300f394-f26e-4b71-b571-6b1be5af2348/encelad",
								],
								class: [""],
								text: "Je comprends",
							},
						},
					],
				},
				{
					elem: "a",
					attrs: {
						text: "Mediashow.fr",
						id: "link-mediashow",
						target: ["_blank"],
						href: ["https://mediashow.fr/corporate"],
						class: ["link"],
					},
				},
			],
		},
	],
});




