import { createElement } from 'lwc';
import StudentTile from 'c/studentTile';

describe('c-student-tile', () => {
	
	afterEach(() => {
		// The jsdom instance is shared across test cases in a single file so reset the DOM
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	});
	
	it('Displays the name of the current student', () => {
        // Create initial element
        const element = createElement('c-student-tile', {
            is: StudentTile
		});
		element.student = {
			Name: "Test User",
			PhotoUrl: '/services/images/photo/003123451234512345',
			Id: "003123451234512345"
		}
		//element.selectedStudentId="003123451234512345";
        document.body.appendChild(element);

        // Query div element that displays user id.
        const headerElement = element.shadowRoot.querySelector(
            'div[class="lower-third"] h1'
        );
        expect(headerElement).not.toBeNull();
        expect(headerElement.textContent).toBe(element.student.Name);
    });
});
