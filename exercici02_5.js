
(function() {
	const alarmaInput = document.getElementById('alarma_hora');
	const setBtn = document.getElementById('set_alarma');
	const clearBtn = document.getElementById('clear_alarma');
	const relojEl = document.getElementById('reloj');
	const audio = document.getElementById('audioElement');
	const select_music = document.getElementById('select_music');
	const inp_vol = document.getElementById('inp_vol_audio');

	
	let alarmaTime = null; 
	let alarmaActiva = false;
	let alarmaFired = false;

	// Funció per formatejar numeros a dos digits
	function pad(n) { return n.toString().padStart(2, '0'); }

	function formatTime(date) {
		return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
	}

	function normalizeInputTime(val) {
		if (!val) return null;
		if (val.length === 5) return val + ':00';
		return val;
	}

	// Estableix l'alarma
	setBtn.addEventListener('click', function() {
		const val = normalizeInputTime(alarmaInput.value);
		if (!val) {
			setBtn.textContent = 'Establir Alarma';
			alarmaActiva = false;
			alarmaTime = null;
			return;
		}
		alarmaTime = val;
		alarmaActiva = true;
		alarmaFired = false;
		setBtn.textContent = `Alarma establecida: ${alarmaTime}`;
	});

	// Reseteja l'alarma
	clearBtn.addEventListener('click', function() {
		alarmaActiva = false;
		alarmaTime = null;
		alarmaFired = false;
		setBtn.textContent = 'Establir Alarma';
		if (audio && !audio.paused) {
			audio.pause();
			audio.currentTime = 0;
			audio.loop = false;
		}
	});

	// Sincronitza el volum de l'àudio amb el slider
	if (audio && inp_vol) {
		audio.volume = parseFloat(inp_vol.value);
	}

	// Actualitza el rellotge cada segon i comprova l'alarma
	function updateClock() {
		const now = new Date();
		const nowStr = formatTime(now);
		if (relojEl) relojEl.textContent = nowStr;
		if (alarmaActiva && !alarmaFired && alarmaTime) {
			if (nowStr === alarmaTime) {
				alarmaFired = true;
				const music = (select_music && select_music.value) ? select_music.value : null;
				if (music) {
					if (!audio.src || audio.src.indexOf(music) === -1) {
						audio.src = music;
					}
				}
				if (inp_vol) audio.volume = parseFloat(inp_vol.value);
				audio.loop = true;
				audio.play();
			}
		}
	}

	// Inicia l'interval del rellotge
	setInterval(updateClock, 1000);
	// executa una vegada immediatament
	updateClock();
})();
