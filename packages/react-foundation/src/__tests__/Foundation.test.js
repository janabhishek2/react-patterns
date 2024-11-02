import { SPACING } from "../Spacing";
import TextSizes from "../TextSizes";

describe('Snapshot test foundations', () => { 
    test('contains the correct Spacing snapshot', () => { 
        expect(SPACING).toMatchSnapshot();
    });

    test('contains the correct TextSizes snapshot', () => {
        expect(TextSizes).toMatchSnapshot();
    })
});
