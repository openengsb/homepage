
$(document).ready(function() {
      $('.confluenceTable').addClass('table table-striped table-bordered table-condensed');
      $('.dropdown-toggle').dropdown();
      
      $("[id^=faqtext]").css("display","none");
      $("[id^=faqtext]").addClass("well");
      
      $("[id^=faq]").click(function () {
        var value = $(this).attr('id').replace('faq','');
        value = "#faqtext" + value;
         $(value).toggle();
      });
});
