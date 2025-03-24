import Haircut from "../../Images/new/category/back_haircut.jpg";
import hair_color from "../../Images/new/category/back_hair_color.jpg";
import shaving from "../../Images/new/category/back_shaving.jpg";
import Orther_Facilities from "../../Images/new/category/other_facility.jpeg";
import Package from "../../Images/new/category/packages.jpeg";
const HomePlanData = [
    {
        ServiceHead: 'Haircut',
        backImages:Haircut,
        ServiceList: [
            {
                serviceid:'1',
                serviceName: 'Haircut (Vishal Kumar)',
                servicePrice: '1000',
            },
            {
                serviceid:'2',
                serviceName: 'Haircut (Any Design /Tato0)',
                servicePrice: '500',
            },
            {
                serviceid:'3',
                serviceName: 'Shampoo',
                servicePrice: '200',
            },
            {
                serviceid:'4',
                serviceName: 'Mundan',
                servicePrice: '800',
            },
            {
                serviceid:'5',
                serviceName: 'Mudan Home Service',
                servicePrice: '1500',
            },
            {
                serviceid:'6',
                serviceName: 'HAIR CUT ( Assistant )',
                servicePrice: '400',
            },
        ]
    },
    {
        ServiceHead: 'Shave',
        backImages:shaving,
        ServiceList: [
            {
                serviceid:'7',
                serviceName: 'Shave',
                servicePrice: '200',
            },
            {
                serviceid:'8',
                serviceName: 'French Shave',
                servicePrice: '250',
            },
            {
                serviceid:'9',
                serviceName: 'Trim With Use Of Blade',
                servicePrice: '250',
            },
            {
                serviceid:'10',
                serviceName: 'Any Design Shave',
                servicePrice: '250',
            },
            {
                serviceid:'11',
                serviceName: 'Trim With Machine Only',
                servicePrice: '200',
            },
        ]
    },
    {
        ServiceHead: 'Hair Colour',
        backImages:hair_color,
        ServiceList: [
            {
                serviceid:'12',
                serviceName: 'Inoa Colour (Ammonia Free)',
                servicePrice: '1100',
            },
            {
                serviceid:'13',
                serviceName: 'Loreal Excellence',
                servicePrice: '1100',
            },
            {
                serviceid:'14',
                serviceName: 'Loreal Majirel',
                servicePrice: '1100',
            },
            {
                serviceid:'15',
                serviceName: 'Application',
                serviceDes: 'YOUR COLOUR WE JUST APPLY',
                servicePrice: '500',
            },
            {
                serviceid:'16',
                serviceName: 'French Beard Colour',
                servicePrice: '500',
            },
            {
                serviceid:'17',
                serviceName: 'Full Beard Colour',
                servicePrice: '1000',
            },
            {
                serviceid:'18',
                serviceName: 'Developer Per Application',
                servicePrice: '250',
            },
            {
                serviceid:'19',
                serviceName: 'Moustache Colour',
                servicePrice: '250',
            }
        ]
    },
    {
        ServiceHead: 'Other Facilities',
        backImages:Orther_Facilities,
        ServiceList: [
            {
                serviceid:'20',
                serviceName: 'Manicure',
                servicePrice: '550',
            },
            {
                serviceid:'21',
                serviceName: 'Pedicure',
                servicePrice: '650',
            },
            {
                serviceid:'22',
                serviceName: 'Pedi Pie Manicure',
                servicePrice: '1100',
            },
            {
                serviceid:'23',
                serviceName: 'Pedi Pie Pedicure',
                servicePrice: '1100',
            },
            {
                serviceid:'24',
                serviceName: 'Alga Manicure',
                servicePrice: '2100',
            },
            {
                serviceid:'25',
                serviceName: 'Alga Pedicure',
                servicePrice: '2100',
            },
            {
                serviceid:'26',
                serviceName: 'Hand Massage (20 Mins)',
                servicePrice: '400',
            },
            {
                serviceid:'27',
                serviceName: 'Foot Massage (20 Mins)',
                servicePrice: '400',
            },
            {
                serviceid:'28',
                serviceName: 'Head Massage (30 Mins)',
                servicePrice: '500',
            },
            {
                serviceid:'29',
                serviceName: 'Kama Oil Head Massage',
                servicePrice: '800',
            },
            {
                serviceid:'30',
                serviceName: 'Hair Set',
                servicePrice: '200',
            },
            {
                serviceid:'31',
                serviceName: 'Hair Spa',
                servicePrice: '1000',
            },
            {
                serviceid:'32',
                serviceName: 'Chest Hair Trim',
                servicePrice: '450',
            },
            {
                serviceid:'33',
                serviceName: 'Back Hair Trim',
                servicePrice: '450',
            },
            {
                serviceid:'34',
                serviceName: 'Grooming Makeup (One Time )',
                servicePrice: '7000',
            },
        ]
    },
    {
        ServiceHead: 'Ohair Spl Package',
        backImages:Package,
        ServiceList: [
            {
                serviceid:'35',
                serviceName: 'Men Hair Highlights',
                servicePrice: '2000',
            },
            {
                serviceid:'36',
                serviceName: "Ohair'S Foot Spa",
                serviceDes: "AROMATIC FOOT MASSAGE (45 MINS) THE MASSAGE BEGINS WITH REFLEX ACTIVITY OF FEET PROGRESSING TO POWERFUL TECHNIQUES BASED ON SWEDISH MASSAGE,   ACTIVATES CIRCULATION AND LYMPHATIC SYSTEM, DETOXIFIES AND IMPROVES FUNCTION OF NERVOUS SYSTEM ULTIMATELY RELIVING ALL SIGNS OF STRESS",
                servicePrice: '1000',
            },
        ]
    },
];

export default HomePlanData;
