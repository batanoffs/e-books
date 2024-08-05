export const fetchDeliveryOptions = async () => {

    //TODO research and create endpoints
    
    const speedyResponse = await fetch('https://api.speedy.bg/offices');
    const econtResponse = await fetch('https://api.econt.bg/offices');

    const speedyOffices = await speedyResponse.json();
    const econtOffices = await econtResponse.json();

    return {
        speedy: speedyOffices.map((office: any) => office.name),
        econt: econtOffices.map((office: any) => office.name)
    };
};
