export interface ImageType {
    title: string,
    mediasrc: string,
    caption: string,
    creator: string,
    mediaid: string,
    width: string | number,
    height: string | number,
    usagelicences: UsageLicence[],
    creationdate: Date | string
}

interface UsageLicence { credits: number, price: number, currency: string, }