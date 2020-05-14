var arr = [
	["Бухарестський", "Який мирний договір (28 травня 1812 року) був підписаний між Російською та Османською імперіями, який завершив російсько-турецьку війну 1806—1812.", 0],
	["Гладкий", "Прізвище останнього кошового отамана Задунайської Січі.", 0],
	["Наддніпрянщина", "В XIX ст. назва всіх українських територій в складі Російської імперії (крім Криму та Кубані).", 0],
	["Котляревський", "Автор поеми «Енеїда», п'єси «Наталка Полтавка» і «Москаль-чарівник».", 0],
	["Хлопоманство", "Народницько-культурна течія української інтелігенції на Правобережній Україні в 1850-ті—1860-ті роки, яка прагнула зближення інтелігенції з народом.", 0],
	["Народовці", "Суспільно-політична течія серед молодої західноукраїнської інтелігенції, що виникла в 1860-х в Королівстві Галичини, мета якої формування національної самосвідомості українців, розв’язання культурно освітніх та політичних проблем.", 0],
	["Кобзар", "Назва збірки поетичних творів Тараса Григоровича Шевченка, видана 1840р. у Санкт-Петербурзі і містила усі віршовані твори Шевченка.", 0],
	["Декабристи", "Перші дворяни-революціонери, які 14 (26) грудня 1825 року за допомогою зброї прагнули встановити в Росії конституційний лад.", 0]
];

function createDOMElement(tagName, options, parent) {
	var el = document.createElement(tagName);
	for (var key in options) {
		//console.log(key + " " + options[key]);
		el.setAttribute(key, options[key]);
	}
	parent.appendChild(el);
	return el;
}

/*document.addEventListener('keydown', function (e) {
					e.target.innerHTML = String.fromCharCode(e.keyCode);
				});*/
//window.alert(arr[0][0].length);

(function () {

	var wrp = document.querySelector(".q1");
	var wrp228 = document.querySelector(".wrapper");
	window.addEventListener('load', function () {

		var qg11 = createDOMElement('div', {
			class: 'q2'
		}, wrp);
		qg11.iterIsEl = 0;
		var qg12 = createDOMElement('div', {
			class: 'q2'
		}, wrp);
		qg12.iterIsEl = 0;
		var qg13 = createDOMElement('div', {
			class: 'q2'
		}, wrp);
		qg13.iterIsEl = 0;
		var qg14 = createDOMElement('div', {
			class: 'q2'
		}, wrp);
		qg14.iterIsEl = 0;
		var qg15 = createDOMElement('div', {
			class: 'q2'
		}, wrp);
		qg15.iterIsEl = 0;
		var qg16 = createDOMElement('div', {
			class: 'q2'
		}, wrp);
		qg16.iterIsEl = 0;
		var qg17 = createDOMElement('div', {
			class: 'q2'
		}, wrp);
		qg17.iterIsEl = 0;
		var qg18 = createDOMElement('div', {
			class: 'q2'
		}, wrp);
		qg18.iterIsEl = 0;

		for (j = 0; j < arr[0][0].length; j++) {
			var qg2 = createDOMElement('div', {
				class: 'q3'
			}, qg11);
			var p2 = createDOMElement('p', {
				class: 'p2'
			}, qg2);
		}
		for (j = 0; j < arr[1][0].length; j++) {
			var qg2 = createDOMElement('div', {
				class: 'q3'
			}, qg12);
			var p2 = createDOMElement('p', {
				class: 'p2'
			}, qg2);
		}
		for (j = 0; j < arr[2][0].length; j++) {
			var qg2 = createDOMElement('div', {
				class: 'q3'
			}, qg13);
			var p2 = createDOMElement('p', {
				class: 'p2'
			}, qg2);
		}
		for (j = 0; j < arr[3][0].length; j++) {
			var qg2 = createDOMElement('div', {
				class: 'q3'
			}, qg14);
			var p2 = createDOMElement('p', {
				class: 'p2'
			}, qg2);
		}
		for (j = 0; j < arr[4][0].length; j++) {
			var qg2 = createDOMElement('div', {
				class: 'q3'
			}, qg15);
			var p2 = createDOMElement('p', {
				class: 'p2'
			}, qg2);
		}
		for (j = 0; j < arr[5][0].length; j++) {
			var qg2 = createDOMElement('div', {
				class: 'q3'
			}, qg16);
			var p2 = createDOMElement('p', {
				class: 'p2'
			}, qg2);
		}
		for (j = 0; j < arr[6][0].length; j++) {
			var qg2 = createDOMElement('div', {
				class: 'q3'
			}, qg17);
			var p2 = createDOMElement('p', {
				class: 'p2'
			}, qg2);
		}
		for (j = 0; j < arr[7][0].length; j++) {
			var qg2 = createDOMElement('div', {
				class: 'q3'
			}, qg18);
			var p2 = createDOMElement('p', {
				class: 'p2'
			}, qg2);
		}

		qg2.addEventListener('mousemove', function (e) {
			e.target.classList.add('selected');
		});
		qg2.addEventListener('mouseout', function (e) {
			e.target.classList.remove('selected');
		});

		var qg6 = createDOMElement('div', {
			class: 'q6'
		}, wrp);
		qg11.addEventListener('mousemove', function (e) {
			qg6.innerHTML = arr[0][1];
		});
		qg11.addEventListener('mouseout', function (e) {
			qg6.innerHTML = "";
		});
		qg12.addEventListener('mousemove', function (e) {
			qg6.innerHTML = arr[1][1];
		});
		qg12.addEventListener('mouseout', function (e) {
			qg6.innerHTML = "";
		});
		qg13.addEventListener('mousemove', function (e) {
			qg6.innerHTML = arr[2][1];
		});
		qg13.addEventListener('mouseout', function (e) {
			qg6.innerHTML = "";
		});
		qg14.addEventListener('mousemove', function (e) {
			qg6.innerHTML = arr[3][1];
		});
		qg14.addEventListener('mouseout', function (e) {
			qg6.innerHTML = "";
		});
		qg15.addEventListener('mousemove', function (e) {
			qg6.innerHTML = arr[4][1];
		});
		qg15.addEventListener('mouseout', function (e) {
			qg6.innerHTML = "";
		});
		qg16.addEventListener('mousemove', function (e) {
			qg6.innerHTML = arr[5][1];
		});
		qg16.addEventListener('mouseout', function (e) {
			qg6.innerHTML = "";
		});
		qg17.addEventListener('mousemove', function (e) {
			qg6.innerHTML = arr[6][1];
		});
		qg17.addEventListener('mouseout', function (e) {
			qg6.innerHTML = "";
		});
		qg18.addEventListener('mousemove', function (e) {
			qg6.innerHTML = arr[7][1];
		});
		qg18.addEventListener('mouseout', function (e) {
			qg6.innerHTML = "";
		});

		/*
		var res = StrName.split("");
		var p228 = document.querySelector(".p228");
		child.firstChild.innerHTML = StrName[4];
		child.innerHTML = StrName[4];
		p228.innerHTML = StrName[4];
		child.innerHTML = res.findIndex(4);
		*/

		qg11.addEventListener('click', function (e) { //1
			var child = qg11.firstChild; //2
			var StrName = "";
			var qg4 = document.createElement('div');
			qg4.setAttribute("class", "q4");
			wrp228.appendChild(qg4);
			var qg5 = document.createElement('div');
			qg5.setAttribute("class", "q5");
			qg4.appendChild(qg5);
			var ip7 = document.createElement('input');
			ip7.setAttribute("class", "ipt");
			ip7.setAttribute("type", "text");
			ip7.setAttribute("placeholder", "Ответ");
			qg5.appendChild(ip7);
			var bt8 = document.createElement('button');
			bt8.setAttribute("class", "bt8");
			qg5.appendChild(bt8);
			bt8.innerHTML = "OK";
			bt8.addEventListener('click', function (e) {
				qg4.parentNode.removeChild(qg4);
				StrName = ip7.value;
				for (i = 0; i < StrName.length; i++) {
					child.firstChild.innerHTML = StrName[i];
					child = child.nextSibling;
				}
			});
		});

		qg12.addEventListener('click', function (e) { //1
			var child = qg12.firstChild; //2
			var StrName = "";
			var qg4 = document.createElement('div');
			qg4.setAttribute("class", "q4");
			wrp228.appendChild(qg4);
			var qg5 = document.createElement('div');
			qg5.setAttribute("class", "q5");
			qg4.appendChild(qg5);
			var ip7 = document.createElement('input');
			ip7.setAttribute("class", "ipt");
			ip7.setAttribute("type", "text");
			ip7.setAttribute("placeholder", "Ответ");
			qg5.appendChild(ip7);
			var bt8 = document.createElement('button');
			bt8.setAttribute("class", "bt8");
			qg5.appendChild(bt8);
			bt8.innerHTML = "OK";
			bt8.addEventListener('click', function (e) {
				qg4.parentNode.removeChild(qg4);
				StrName = ip7.value;
				for (i = 0; i < StrName.length; i++) {
					child.firstChild.innerHTML = StrName[i];
					child = child.nextSibling;
				}
			});
		});

		qg13.addEventListener('click', function (e) { //1
			var child = qg13.firstChild; //2
			var StrName = "";
			var qg4 = document.createElement('div');
			qg4.setAttribute("class", "q4");
			wrp228.appendChild(qg4);
			var qg5 = document.createElement('div');
			qg5.setAttribute("class", "q5");
			qg4.appendChild(qg5);
			var ip7 = document.createElement('input');
			ip7.setAttribute("class", "ipt");
			ip7.setAttribute("type", "text");
			ip7.setAttribute("placeholder", "Ответ");
			qg5.appendChild(ip7);
			var bt8 = document.createElement('button');
			bt8.setAttribute("class", "bt8");
			qg5.appendChild(bt8);
			bt8.innerHTML = "OK";
			bt8.addEventListener('click', function (e) {
				qg4.parentNode.removeChild(qg4);
				StrName = ip7.value;
				for (i = 0; i < StrName.length; i++) {
					child.firstChild.innerHTML = StrName[i];
					child = child.nextSibling;
				}
			});
		});

		qg14.addEventListener('click', function (e) { //1
			var child = qg14.firstChild; //2
			var StrName = "";
			var qg4 = document.createElement('div');
			qg4.setAttribute("class", "q4");
			wrp228.appendChild(qg4);
			var qg5 = document.createElement('div');
			qg5.setAttribute("class", "q5");
			qg4.appendChild(qg5);
			var ip7 = document.createElement('input');
			ip7.setAttribute("class", "ipt");
			ip7.setAttribute("type", "text");
			ip7.setAttribute("placeholder", "Ответ");
			qg5.appendChild(ip7);
			var bt8 = document.createElement('button');
			bt8.setAttribute("class", "bt8");
			qg5.appendChild(bt8);
			bt8.innerHTML = "OK";
			bt8.addEventListener('click', function (e) {
				qg4.parentNode.removeChild(qg4);
				StrName = ip7.value;
				for (i = 0; i < StrName.length; i++) {
					child.firstChild.innerHTML = StrName[i];
					child = child.nextSibling;
				}
			});
		});

		qg15.addEventListener('click', function (e) { //1
			var child = qg15.firstChild; //2
			var StrName = "";
			var qg4 = document.createElement('div');
			qg4.setAttribute("class", "q4");
			wrp228.appendChild(qg4);
			var qg5 = document.createElement('div');
			qg5.setAttribute("class", "q5");
			qg4.appendChild(qg5);
			var ip7 = document.createElement('input');
			ip7.setAttribute("class", "ipt");
			ip7.setAttribute("type", "text");
			ip7.setAttribute("placeholder", "Ответ");
			qg5.appendChild(ip7);
			var bt8 = document.createElement('button');
			bt8.setAttribute("class", "bt8");
			qg5.appendChild(bt8);
			bt8.innerHTML = "OK";
			bt8.addEventListener('click', function (e) {
				qg4.parentNode.removeChild(qg4);
				StrName = ip7.value;
				for (i = 0; i < StrName.length; i++) {
					child.firstChild.innerHTML = StrName[i];
					child = child.nextSibling;
				}
			});
		});

		qg16.addEventListener('click', function (e) { //1
			var child = qg16.firstChild; //2
			var StrName = "";
			var qg4 = document.createElement('div');
			qg4.setAttribute("class", "q4");
			wrp228.appendChild(qg4);
			var qg5 = document.createElement('div');
			qg5.setAttribute("class", "q5");
			qg4.appendChild(qg5);
			var ip7 = document.createElement('input');
			ip7.setAttribute("class", "ipt");
			ip7.setAttribute("type", "text");
			ip7.setAttribute("placeholder", "Ответ");
			qg5.appendChild(ip7);
			var bt8 = document.createElement('button');
			bt8.setAttribute("class", "bt8");
			qg5.appendChild(bt8);
			bt8.innerHTML = "OK";
			bt8.addEventListener('click', function (e) {
				qg4.parentNode.removeChild(qg4);
				StrName = ip7.value;
				for (i = 0; i < StrName.length; i++) {
					child.firstChild.innerHTML = StrName[i];
					child = child.nextSibling;
				}
			});
		});

		qg17.addEventListener('click', function (e) { //1
			var child = qg17.firstChild; //2
			var StrName = "";
			var qg4 = document.createElement('div');
			qg4.setAttribute("class", "q4");
			wrp228.appendChild(qg4);
			var qg5 = document.createElement('div');
			qg5.setAttribute("class", "q5");
			qg4.appendChild(qg5);
			var ip7 = document.createElement('input');
			ip7.setAttribute("class", "ipt");
			ip7.setAttribute("type", "text");
			ip7.setAttribute("placeholder", "Ответ");
			qg5.appendChild(ip7);
			var bt8 = document.createElement('button');
			bt8.setAttribute("class", "bt8");
			qg5.appendChild(bt8);
			bt8.innerHTML = "OK";
			bt8.addEventListener('click', function (e) {
				qg4.parentNode.removeChild(qg4);
				StrName = ip7.value;
				for (i = 0; i < StrName.length; i++) {
					child.firstChild.innerHTML = StrName[i];
					child = child.nextSibling;
				}
			});
		});

		qg18.addEventListener('click', function (e) { //1
			var child = qg18.firstChild; //2
			var StrName = "";
			var qg4 = document.createElement('div');
			qg4.setAttribute("class", "q4");
			wrp228.appendChild(qg4);
			var qg5 = document.createElement('div');
			qg5.setAttribute("class", "q5");
			qg4.appendChild(qg5);
			var ip7 = document.createElement('input');
			ip7.setAttribute("class", "ipt");
			ip7.setAttribute("type", "text");
			ip7.setAttribute("placeholder", "Ответ");
			qg5.appendChild(ip7);
			var bt8 = document.createElement('button');
			bt8.setAttribute("class", "bt8");
			qg5.appendChild(bt8);
			bt8.innerHTML = "OK";
			bt8.addEventListener('click', function (e) {
				qg4.parentNode.removeChild(qg4);
				StrName = ip7.value;
				for (i = 0; i < StrName.length; i++) {
					child.firstChild.innerHTML = StrName[i];
					child = child.nextSibling;
				}
			});
		});

		var bt9 = createDOMElement('button', {
			class: 'bt9'
		}, wrp);
		bt9.innerHTML = "Здати";
		//window.alert(i);
		bt9.addEventListener("click", function (e) {
			var StrName = ["", "", "", "", "", "", "", ""];
			var child = qg11.firstChild; //1
			for (i = 0; i < arr[0][0].length; i++) { //2
				StrName[0] += child.firstChild.textContent; //3
				child = child.nextSibling;
			}
			var child = qg12.firstChild; //1
			for (i = 0; i < arr[1][0].length; i++) { //2
				StrName[1] += child.firstChild.textContent; //3
				child = child.nextSibling;
			}
			var child = qg13.firstChild; //1
			for (i = 0; i < arr[2][0].length; i++) { //2
				StrName[2] += child.firstChild.textContent; //3
				child = child.nextSibling;
			}
			var child = qg14.firstChild; //1
			for (i = 0; i < arr[3][0].length; i++) { //2
				StrName[3] += child.firstChild.textContent; //3
				child = child.nextSibling;
			}
			var child = qg15.firstChild; //1
			for (i = 0; i < arr[4][0].length; i++) { //2
				StrName[4] += child.firstChild.textContent; //3
				child = child.nextSibling;
			}
			var child = qg16.firstChild; //1
			for (i = 0; i < arr[5][0].length; i++) { //2
				StrName[5] += child.firstChild.textContent; //3
				child = child.nextSibling;
			}
			var child = qg17.firstChild; //1
			for (i = 0; i < arr[6][0].length; i++) { //2
				StrName[6] += child.firstChild.textContent; //3
				child = child.nextSibling;
			}
			var child = qg18.firstChild; //1
			for (i = 0; i < arr[07][0].length; i++) { //2
				StrName[7] += child.firstChild.textContent; //3
				child = child.nextSibling;
			}
			if (StrName[0] == arr[0][0]) {
				qg11.classList.add("green");
				arr[0][2]=1;
			} else {
				qg11.classList.add("red");
			}
			if (StrName[1] == arr[1][0]) {
				qg12.classList.add("green");
				arr[1][2]=1;
			} else {
				qg12.classList.add("red");
			}
			if (StrName[2] == arr[2][0]) {
				qg13.classList.add("green");
				arr[2][2]=1;
			} else {
				qg13.classList.add("red");
			}
			if (StrName[3] == arr[3][0]) {
				qg14.classList.add("green");
				arr[3][2]=1;
			} else {
				qg14.classList.add("red");
			}
			if (StrName[4] == arr[4][0]) {
				qg15.classList.add("green");
				arr[4][2]=1;
			} else {
				qg15.classList.add("red");
			}
			if (StrName[5] == arr[5][0]) {
				qg16.classList.add("green");
				arr[5][2]=1;
			} else {
				qg16.classList.add("red");
			}
			if (StrName[6] == arr[6][0]) {
				qg17.classList.add("green");
				arr[6][2]=1;
			} else {
				qg17.classList.add("red");
			}
			if (StrName[7] == arr[7][0]) {
				qg18.classList.add("green");
				arr[7][2]=1;
			} else {
				qg18.classList.add("red");
			}
			//window.alert(StrName[0]);
			//window.alert(arr[0][0]);
			if(arr[0][2]==1&&arr[1][2]==1&&arr[2][2]==1&&arr[3][2]==1&&arr[4][2]==1&&arr[5][2]==1&&arr[6][2]==1&&arr[7][2]==1){
				window.alert("YOU WIN!");
			}
			else{
				window.alert("Както не фотронуло :(");
			}
		});

	});
})();
