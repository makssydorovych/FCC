//1 Only change code below this line
const myArray = [[], []];
//2Create a variable called myData and set it to equal the first value of myArray using bracket notation.
const myArray = [50, 60, 70];
const myData = myArray[0];
//3Modify the data stored at index 0 of myArray to a value of 45.
// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;

//4Using bracket notation select an element from myArray such that myData is equal to 8.
const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
//5Using bracket notation select an element from myArray such that myData is equal to 8.
const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
//6 Add a button as the last element of your form element with a type of submit, and Submit as its text.
<button type="submit">Submit</button>
//47 Make your text input a required field, so that your user can't submit the form without completing this field.

//Then try to submit the form without inputting any text. See how your HTML5 form notifies you that the field is required?
<input type="text" required placeholder="cat photo URL"></input>

//48  Add a pair of radio buttons to your form, each nested in its own label element. One should have the option of indoor and the other should have the option of outdoor. 
// Both should share the name attribute of indoor-outdoor to create a radio group.
<label for="indoor"> 
<input type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
<input type="radio" name="indoor-outdoor">Outdoor 
</label>
{/* 
//49 Add to your form a set of three checkboxes.
 Each checkbox should be nested within its own label element. All three should share the name attribute of personality. */}
   <label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Like</label>
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Hate</label>

	 {/* 50 Give each of the existing radio and checkbox inputs the value attribute. 
	 Do not create any new radio or checkbox elements. Use the input label text, in lowercase, as the value for the attribute. */}
	   <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" value="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" value="loving" type="checkbox" name="personality"> Loving</label>
    <label for="lazy"><input id="lazy" value="lazy" type="checkbox" name="personality"> Lazy</label>
    <label for="energetic"><input id="energetic" value="energetic" type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>