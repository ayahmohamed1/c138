/**
 * =========================================================================
 * ملف بيانات وتفاصيل دعوة الخطوبة
 * INVITATION CONFIGURATION FILE
 * =========================================================================
 * يمكنك تغيير أي صورة بكل سهولة إما:
 * 1) استبدال ملف الصورة مباشرة في مجلد public (مثل: couple.jpg أو children.png أو gallery2.jpg أو gallery3.jpg)
 * 2) أو تعديل المسار هنا في هذا الملف مباشرة.
 * =========================================================================
 */

export const INVITATION_DATA = {
  // =========================================================================
  // 📸 قسم الصور (جميع الصور موجودة في مجلد public ويمكن استبدالها وتغييرها بسهولة)
  // =========================================================================
  images: {
    // 1. صورة العروسين الرئيسية (الصورة 1 في معرض الصور)
    couple: "/couple.jpg",

    // 2. صور معرض الصور الإضافية (الصورة 2 و 3)
    gallery1: "/couple.jpg",
    gallery2: "/gallery_rings.jpg",
    gallery3: "/gallery_sunset.jpg",

    // 3. صورة الأطفال في أسفل الدعوة
    children: "/children.png",

    // 4. صورة الظرف الملكي (شاشة البداية)
    envelope: "/envelope.png",

    // 5. صورة الستارة المخملية (أعلى البطاقة)
    curtain: "/curtain.png",

    // 6. صورة باقة الورد (أعلى اليمين)
    bouquet: "/bouquet.png",

    // 7. صورة الحمامة الطائرة
    dove: "/dove.png",
  },

  // ترويسة الغلاف والظرف
  envelopeHeader: "We're getting engaged",

  // الاسمان بالخط الإنجليزي المائل (مثل الصورة المرجعية تماماً)
  scriptNames: "Mohamed & Huda",

  // ترويسة الدعوة
  headerTitleEn: "THE engagement OF OUR CHILDREN",
  headerTitleAr: "حفل خطوبة مبارك",

  // بيانات العريس
  groom: {
    name: "Mohamed",
    nameAr: "محمد",
    subtitle: "GROOM"
  },

  // بيانات العروس
  bride: {
    name: "Huda",
    nameAr: "هدى",
    subtitle: "BRIDE"
  },

  // عبارة الدعوة الترحيبية بالإنجليزية
  welcomeMessage: "We would love to have you with us as we celebrate the beginning of our forever.",

  // معرض الصور (3 صور مع العنوان PHOTO GALLERY)
  gallery: {
    title: "PHOTO GALLERY",
    photos: [
      { id: 1, src: "/couple.jpg", fallback: "/gallery1.jpg", alt: "صورة العروسين الملكية" },
      { id: 2, src: "/gallery_rings.jpg", fallback: "/gallery2.jpg", alt: "دبل وخواتم الخطوبة" },
      { id: 3, src: "/gallery_sunset.jpg", fallback: "/gallery3.jpg", alt: "لحظات رومانسية عند الغروب" },
    ],
    photoMainPortrait: "/couple.jpg",
  },

  // تفاصيل الموعد والوقت (العد التنازلي)
  schedule: {
    headingEn: "THE ENGAGEMENT PARTY WILL TAKE PLACE AT:",
    timeDisplay: "9:00 PM",
    dateDayName: "WEDNESDAY",
    dateDayNameAr: "الأربعاء",
    dateDayNumber: "4",
    dateMonthYear: "NOVEMBER 2026",
    dateMonthYearAr: "نوفمبر ٢٠٢٦",
    // تاريخ ووقت الحفل لحساب العد التنازلي: 4 نوفمبر 2026 الساعة 9:00 مساءً
    targetDateTime: "2026-11-04T21:00:00"
  },

  // تفاصيل المكان والخريطة
  location: {
    title: "LOCATION",
    venueName: "Fair Park",
    venueNameAr: "فير بارك",
    address: "Street 4A, Masaken Mowzafy Ghazl, Shebin Al Koum, Monufia, Egypt",
    addressAr: "شارع ٤ أ، مساكن موظفي غزل شبين الكوم، المنوفية، مصر",
    mapUrl: "https://maps.apple.com/place?address=Masaken%20Mowzafy%20Ghazl%20Shebin%20Al%20Koum%20Street%204A,%20Al%20Monoufia,%20Monufia,%20Egypt&coordinate=30.572931,31.001740&name=Fair%20Park&place-id=I31D4715A1448A17E&map=explore",
    mapEmbedIframe: "https://maps.google.com/maps?q=30.572931,31.001740&z=15&output=embed"
  },

  // دريس كود الحفل
  dressCode: {
    title: "DRESS CODE",
    subtitle: "WEAR WHATEVER YOU LIKE — EXCEPT BEIGE AND SHADES OF COFFEE",
    colors: []
  },

  // تأكيد الحضور ورسائل التهنئة للعروسين (RSVP)
  rsvp: {
    title: "RSVP",
    subtitle: "PLEASE CONFIRM YOUR ATTENDANCE",
    namePlaceholder: "Name",
    messagePlaceholder: "Leave a message for Mohamed & Huda...",
    submitText: "SEND RSVP",
    successHeading: "THANK YOU!",
    successMessage: "Your message has been received with love for Mohamed & Huda ❤️"
  },

  // مسار ملف الموسيقى الرومانسية
  audioTrack: "/song.mp3"
};
