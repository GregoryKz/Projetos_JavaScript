// Definir a data alvo
const targetDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Função para atualizar a contagem regressiva a cada segundo
const countdown = setInterval(() => {
    // Obter a data e hora atual
    const now = new Date().getTime();
    
    // Calcular o tempo restante
    const timeRemaining = targetDate - now;
    
    // Converter o tempo restante em dias, horas, minutos e segundos
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Atualizar os elementos HTML com os valores
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    
    // Se a contagem terminar, mostrar mensagem
    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "The wait is over!";
    }
}, 1000);
