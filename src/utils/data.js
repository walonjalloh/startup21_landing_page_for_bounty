const pricingTiers = [
    {
        key:1,
        title: 'Free',
        monthlyPrice: 0,
        buttonText: 'Get Started for free',
        popular: false,
        inverse: false, 
        features : [
            'Access to course for limited time',
            'Acess to course materials for limted time',
            'Basic support',
            'Limited Project',
            'Certificate to be paid for'
        ],
    },
    {
        key: 2,
        title: 'Pro',
        monthlyPrice: 9,
        buttonText: 'Sign Up now',
        popular: true,
        inverse: true, 
        features : [
            'Access to course for ever',
            'Acess to course materials for ever',
            '24/7 Support',
            '50 projects per course',
            'Mentorship program',
            'company referals',
            'Certificate at the end of the course'
        ],
    },
    {
        key: 3,
        title: 'Business',
        monthlyPrice: 19,
        buttonText: 'Sign up',
        popular: false,
        inverse: false, 
        features : [
            'Access to course for ever',
            'Acess to course material for ever',
            '24/7  support',
            '100 project per team',
            'Working experience for the team',
            'Certificate for their resume',
            'Good team collaboration',
            'company referals',
            'Learn Team manegement skills'
        ],   
    }
]

export default pricingTiers