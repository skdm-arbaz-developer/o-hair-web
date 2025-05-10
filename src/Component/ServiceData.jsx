import Hair_Cut from "../Images/service_page/hair/Hair-cut.webp";

// Hair Services
import Womens_Haircut from "../Images/service_page/hair-services/women haircut 1.jpg";
import Mens_Haircut from "../Images/service_page/hair-services/mens haircit 2.jpeg";
import Childrens_Haircut from "../Images/service_page/hair-services/children haircut 3.jpeg";
import Blow_Dry from "../Images/service_page/hair-services/blow-dry 4.jpeg";
import Straightening from "../Images/service_page/hair-services/straightening 5.jpeg";
import Curling_Waves from "../Images/service_page/hair-services/curling, waves 6.jpeg";
import Updos from "../Images/service_page/hair-services/updos 7.jpeg";
import Keratin_Treatment from "../Images/service_page/hair-services/keratein 8.jpeg";
import Scalp_Treatment from "../Images/service_page/hair-services/sculp treatment 9.jpeg";
import Hair_Spa from "../Images/service_page/hair-services/hair spa10.jpeg";
import Olaplex_Treatment from "../Images/service_page/hair-services/olaplex treatment 11.jpeg";
import Full_Color from "../Images/service_page/hair-services/full hair color 12.jpeg";
import Root_Touch_Up from "../Images/service_page/hair-services/root touch-up 13.jpeg";
import Highlights_Lowlights from "../Images/service_page/hair-services/highlights, lowlights 14.jpg";
import Balayage_Ombre from "../Images/service_page/hair-services/balayge, ombre 15.jpeg";

// Skin Care Services
import Hydrating_Facial from "../Images/service_page/skin-care-services/hydrating-facial 1.jpeg";
import Anti_Aging_Facial from "../Images/service_page/skin-care-services/antiaging 2.jpeg";
import Acne_Treatment_Facial from "../Images/service_page/skin-care-services/acne treatment 3.jpeg";
import Brightening_Facial from "../Images/service_page/skin-care-services/brightening facial 4.jpeg";
import Microdermabrasion from "../Images/service_page/skin-care-services/micro brightening 5.jpeg";
import Chemical_Peels from "../Images/service_page/skin-care-services/chemical peel 6.jpeg";
import Dermaplaning from "../Images/service_page/skin-care-services/dermaplanning 7.jpeg";
import LED_Light_Therapy from "../Images/service_page/skin-care-services/led treatment 8.jpg";
import Oxygen_Therapy from "../Images/service_page/skin-care-services/oxygen treatment 9.jpeg";
import Face_Masks from "../Images/service_page/skin-care-services/face mask 10.jpeg";

// Nail Services

import Classic_Manicure from "../Images/service_page/nail-services/classic manicure 1.jpeg";
import Gel_Manicure from "../Images/service_page/nail-services/gel manicure 2.jpeg";
import French_Manicure from "../Images/service_page/nail-services/french manicure 3.jpeg";
import Classic_Pedicure from "../Images/service_page/nail-services/classic pedicure 4.jpeg";
import Spa_Pedicure from "../Images/service_page/nail-services/spa pedicure 5.jpeg";
import Callus_Removal from "../Images/service_page/nail-services/callus removal 6.jpeg";
import Nail_Extensions from "../Images/service_page/nail-services/nail extension 7.webp";
import Nail_Art from "../Images/service_page/nail-services/nail art 8.jpg";

// Waxing and Hair Removal
import Eyebrows from "../Images/service_page/Waxing and Hair Removal/eyebrows 1.jpeg";
import Upper_Lip from "../Images/service_page/Waxing and Hair Removal/upper-lip 2.jpeg";
import Chin from "../Images/service_page/Waxing and Hair Removal/Chin 3.jpeg";
import Arms from "../Images/service_page/Waxing and Hair Removal/arms 4.webp";
import Legs from "../Images/service_page/Waxing and Hair Removal/legs 5.jpeg";
import Back from "../Images/service_page/Waxing and Hair Removal/back 6.jpeg";
import Bikini_Brazilian_Wax from "../Images/service_page/Waxing and Hair Removal/bikni brazilian wax 7.jpg";
import Eyebrow_Threading from "../Images/service_page/Waxing and Hair Removal/eyebrow threading 8.jpeg";
import Facial_Threading from "../Images/service_page/Waxing and Hair Removal/facial threading 9.jpeg";

const ServiceData = [
  {
    mainService: "men",
    mainserviceImage: Mens_Haircut,
    mainServiceDetails: [
      {
        productid: "1",
        serviceMain: "Hair Services",
        subService: [
          {
            productid: "1",
            subServiceName: "Haircut (Vishal Kumar)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "2000",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Haircut (Vishal Kumar)",
          },
          {
            productid: "2",
            subServiceName: "Haircut (Any Design /Tato0)",
            subServiceImage: Mens_Haircut,
            subServicePrice: "2000",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair Services",
          },
          {
            productid: "3",
            subServiceName: "Shampoo",
            subServiceImage: Childrens_Haircut,
            subServicePrice: "2000",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair Services",
          },
          {
            productid: "4",
            subServiceName: "Mundan",
            subServiceImage: Blow_Dry,
            subServicePrice: "2000",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair Services",
          },
          {
            productid: "5",
            subServiceName: "Mudan Home Service",
            subServiceImage: Straightening,
            subServicePrice: "2000",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair Services",
          },
          {
            productid: "6",
            subServiceName: "Haircut (Vishal Kumar)",
            subServiceImage: Curling_Waves,
            subServicePrice: "2000",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Haircut (Vishal Kumar)",
          },
        ],
      },
      {
        productid: "2",
        serviceMain: "Shave",
        subService: [
          {
            productid: "1",
            subServiceName: "Shave",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Shave",
          },
          {
            productid: "2",
            subServiceName: "French Shave",
            subServiceImage: Mens_Haircut,
            subServicePrice: "250",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair Services",
          },
          {
            productid: "3",
            subServiceName: "Trim With Use Of Blade",
            subServiceImage: Childrens_Haircut,
            subServicePrice: "250",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Trim With Use Of Blade",
          },
          {
            productid: "4",
            subServiceName: "Any Design Shave",
            subServiceImage: Blow_Dry,
            subServicePrice: "2000",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair Services",
          },
          {
            productid: "5",
            subServiceName: "Trim With Machine Only",
            subServiceImage: Straightening,
            subServicePrice: "2000",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair Services",
          },
        ],
      },
      {
        productid: "2",
        serviceMain: "Hair Colour",
        subService: [
          {
            productid: "1",
            subServiceName: "Inoa Colour (Ammonia Free)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
          {
            productid: "1",
            subServiceName: "Loreal Excellence",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
          {
            productid: "1",
            subServiceName: "Loreal Majirel",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
          {
            productid: "1",
            subServiceName: "Application",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
          {
            productid: "1",
            subServiceName: "French Beard Colour",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
          {
            productid: "1",
            subServiceName: "Full Beard Colour",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
          {
            productid: "1",
            subServiceName: "Developer Per Application",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
          {
            productid: "1",
            subServiceName: "Moustache Colour",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
        ],
      },
      {
        productid: "2",
        serviceMain: "Orther Facilities",
        subService: [
          {
            productid: "1",
            subServiceName: "Manicure",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Pedi Pie Manicure",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Pedi Pie Pedicure",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Alga Manicure",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Alga Pedicure",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Hand Massage (20 Mins)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Foot Massage (20 Mins)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Head Massage (30 Mins)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Kama Oil Head Massage",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Hair Set",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Hair Spa",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Chest Hair Trim",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Back Hair Trim",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Grooming Makeup (One Time )",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
        ],
      },
      {
        productid: "2",
        serviceMain: "Ohair Spl Package",
        subService: [
          {
            productid: "1",
            subServiceName: "Men Hair Highlights",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Ohair Spl Package",
          },
          {
            productid: "1",
            subServiceName: "Ohair'S Foot Spa",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Ohair Spl Package",
          },
        ],
      },
    ],
  },
  {
    mainService: "women",
    mainserviceImage: Mens_Haircut,
    mainServiceDetails: [
      {
        productid: "1",
        serviceMain: "Haircuts",
        subService: [
          {
            productid: "1",
            subServiceName: "Haircut (Vishal Kumar )",
            subServiceImage: Womens_Haircut,
            subServicePrice: "1400",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Haircut (Vishal Kumar)",
          },
          {
            productid: "2",
            subServiceName: "Haircut ( Assistant Onwards )",
            subServiceImage: Mens_Haircut,
            subServicePrice: "2000",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair Services",
          },
          {
            productid: "3",
            subServiceName: "Soft Curls (Onwards)",
            subServiceImage: Childrens_Haircut,
            subServicePrice: "2000",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair Services",
          },
        ],
      },
      {
        productid: "2",
        serviceMain: "Hair Setting",
        subService: [
          {
            productid: "1",
            subServiceName: "Iron(Onwards)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Shave",
          },
          {
            productid: "2",
            subServiceName: "Blow Dry (Onwards)",
            subServiceImage: Mens_Haircut,
            subServicePrice: "250",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair Services",
          },
          {
            productid: "3",
            subServiceName: "Soft Curls (Onwards)",
            subServiceImage: Childrens_Haircut,
            subServicePrice: "250",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Trim With Use Of Blade",
          },
        ],
      },
      {
        productid: "2",
        serviceMain: "Hair  Shampoo (Onwards)",
        subService: [
          {
            productid: "1",
            subServiceName: "Shampoo",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
          {
            productid: "1",
            subServiceName: "Sulfate Free Shampoo",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
          {
            productid: "1",
            subServiceName: "Loreal Shampoo Straight Protect",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
          {
            productid: "1",
            subServiceName: "Colour Protect",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Hair-Colour",
          },
        ],
      },
      {
        productid: "2",
        serviceMain: "Hair Treatment",
        subService: [
          {
            productid: "1",
            subServiceName: "Hair Spa (Onwards)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Head Massage (30 Mins)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Kama Oil Head Massage ( 30 Mins )",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Steam",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Shampoo (Onwards)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Aboslute Repair Molecular Shoulder Length)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Absolute Repair molecular(Mid Length)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Absolute Repair Molecular Repair (Waist Length)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Olaplex (Onwards)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Milk_Shake Natural Beauty",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Qod spa (Onwards)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "K18 Mist + Leave In Mask (Onwards)",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Absolute hair spa",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "VITAMINO COLOURCARE",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "COTRIL HYDRA SOLUTION",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Nashi Argan",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Hair spa liss unlimited",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
          {
            productid: "1",
            subServiceName: "Nashi Argan",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Orther-Facilities",
          },
        ],
      },
      {
        productid: "2",
        serviceMain: "Ohair Spl Package",
        subService: [
          {
            productid: "1",
            subServiceName: "Men Hair Highlights",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Ohair Spl Package",
          },
          {
            productid: "1",
            subServiceName: "Ohair'S Foot Spa",
            subServiceImage: Womens_Haircut,
            subServicePrice: "200",
            subServiceShortDes:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt molestias odit libero tenetur beatae saepe pariatur, consectetur totam!",
            mainServiceName: "Ohair Spl Package",
          },
        ],
      },
    ],
  },
];

export default ServiceData;
