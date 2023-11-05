$(function () {
    const form = $('#form');
    const answer = $('#answer');

    form.validate({
      rules: {
         email: { required: true, email: true },
         name: { required: true },
         message: { required: true }
      },
      messages: {
         email: { required: 'Введите email', email: 'Отсутствует символ @' },
         name: { required: 'Поле не может быть пустым' },
         message: { required: 'Поле не может быть пустым' }
      },
      submitHandler: ajaxFormSubmit
    });
 
    function ajaxFormSubmit() {
      const string = form.serialize();
 
      $.ajax({
         type: 'POST',
         url: './php/mail.php',
         data: string,
         success: function (html) {
            form.slideUp(800);
            answer.html(html);
         }
      });
 
      return false;
    }
 });