const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carsContent = document.getElementById('.cars-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === 'все марки' ||
        car.querySelector('h4').textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });

    carsContent.scrollIntoView({ behavor: 'instant' });
  };
});





document.getElementById('order-action').addEventListener('click', function() {
  const carInput = document.getElementById('car');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  let isValid = true;

  // Валидация поля "Автомобиль"
  if (carInput.value.trim() === '') {
      carInput.style.border = '2px solid red';
      isValid = false;
  } else {
      carInput.style.border = '2px solid white';
  }

  // Валидация поля "Имя"
  const nameRegex = /^[a-zA-Zа-яА-Я\s]{2,}$/;
  if (!nameRegex.test(nameInput.value.trim())) {
      nameInput.style.border = '2px solid red';
      isValid = false;
  } else {
      nameInput.style.border = '2px solid white';
  }

  // Валидация поля "Телефон"
  const phoneRegex = /^\d{10,15}$/;
  const cleanedPhone = phoneInput.value.replace(/\D/g, '');
  if (!phoneRegex.test(cleanedPhone)) {
      phoneInput.style.border = '2px solid red';
      isValid = false;
  } else {
      phoneInput.style.border = '2px solid white';
  }

  // Обработка успешной отправки
  if (isValid) {
      alert('Спасибо за заявку! Мы скоро свяжемся с вами');
      carInput.value = '';
      nameInput.value = '';
      phoneInput.value = '';
      // Сброс стилей после очистки
      carInput.style.border = '';
      nameInput.style.border = '';
      phoneInput.style.border = '';
  }
});