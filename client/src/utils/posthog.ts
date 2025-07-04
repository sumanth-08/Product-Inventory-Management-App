import posthog from "posthog-js";

const captureEvent = (event: string, property = {}) => {
    posthog.capture(event, property)

}

let isIdentified = false
const id = new Date().getMilliseconds() + Math.floor(Math.random() * 10000);

const identifyUser = () => {
    if (!isIdentified) {
        posthog.identify(`${id}`, {});
        isIdentified = true;
    }
};

export const posthogEvent = {
    addProduct: () => {
        identifyUser()
        captureEvent("add_product")
    }
}