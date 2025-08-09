/*
 * Основной JavaScript для лендинга PozdravlyAI.
 * Добавляет интерактивность: генерация юмористических поздравлений
 * и управление слайдером в секции «Фильм‑поздравление».
 */

document.addEventListener('DOMContentLoaded', () => {
  // AI‑юмористические поздравления
  const jokes = [
    'Поздравляем вас с новым уровнем! Пусть ваши алгоритмы счастья не дают сбоев, а нейросети мечты всегда выдают идеальный результат.',
    'С праздником! Пусть в вашем коде будет меньше багов, а в жизни — больше коммитов ярких впечатлений.',
    'Желаем вам, чтобы каждый день запускался как функция радости, а ошибки сводились лишь к орфографическим.',
    'Пусть ваша жизнь будет как чистый код: понятной, красивой и без лишних комментариев.',
    'Пускай в вашем репозитории всегда будет место для счастливых веток и неожиданных форков успеха.'
  ];
  const humorText = document.getElementById('humor-text');
  const newJokeBtn = document.getElementById('new-joke');

  function setRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    humorText.textContent = jokes[randomIndex];
  }
  if (humorText) {
    setRandomJoke();
  }
  if (newJokeBtn) {
    newJokeBtn.addEventListener('click', () => {
      setRandomJoke();
    });
  }

  // Слайдер для секции «Фильм‑поздравление»
  const slides = document.querySelectorAll('.film-slides .slide');
  let currentSlideIndex = 0;

  function showSlide(index) {
    if (!slides.length) return;
    slides[currentSlideIndex].classList.remove('active');
    // корректируем индекс: обеспечиваем зацикливание
    currentSlideIndex = (index + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add('active');
  }

  const nextBtn = document.getElementById('next-slide');
  const prevBtn = document.getElementById('prev-slide');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => showSlide(currentSlideIndex + 1));
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => showSlide(currentSlideIndex - 1));
  }

  // Автоматическое пролистывание слайдов
  setInterval(() => {
    showSlide(currentSlideIndex + 1);
  }, 10000); // смена каждые 10 секунд
});