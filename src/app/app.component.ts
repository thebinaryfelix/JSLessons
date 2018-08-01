import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  pageOfItems: Array<any>;

  items = [
    {
      title: "Declare String Variables",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/declare-string-variables/"
    },
    {
      title: "Concatenating Strings with Plus Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-plus-operator/"
    },
    {
      title: "Concatenating Strings with the Plus Equals Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator/"
    },
    {
      title: "Constructing Strings with Variables",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/constructing-strings-with-variables/"
    },
    {
      title: "Appending Variables to Strings",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/appending-variables-to-strings/"
    },
    {
      title: "Find the Length of a String",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/find-the-length-of-a-string/"
    },
    {
      title: "Use Bracket Notation to Find the First Character in a String",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-first-character-in-a-string/"
    },
    {
      title: "Understand String Immutability",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understand-string-immutability/"
    },
    {
      title: "Use Bracket Notation to Find the Nth Character in a String",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-character-in-a-string/"
    },
    {
      title:
        "Use Bracket Notation to Find the Nth-to-Last Character in a String",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string/"
    },
    {
      title: "Store Multiple Values in one Variable using JavaScript Arrays",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/store-multiple-values-in-one-variable-using-javascript-arrays/"
    },
    {
      title: "Nest one Array within Another Array",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array/"
    },
    {
      title: "Access Array Data with Indexes",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/access-array-data-with-indexes/"
    },
    {
      title: "Modify Array Data With Indexes",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/modify-array-data-with-indexes/"
    },
    {
      title: "Access Multi-Dimensional Arrays With Indexes",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/access-multi-dimensional-arrays-with-indexes/"
    },
    {
      title: "Manipulate Arrays With push()",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-push/"
    },
    {
      title: "Manipulate Arrays With pop()",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop/"
    },
    {
      title: "Manipulate Arrays With shift()",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift/"
    },
    {
      title: "Manipulate Arrays With unshift()",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-unshift/"
    },
    {
      title: "Shopping List",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/shopping-list/"
    },
    {
      title: "Write Reusable JavaScript with Functions",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions/"
    },
    {
      title: "Passing Values to Functions with Arguments",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments/"
    },
    {
      title: "Global Scope and Functions",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions/"
    },
    {
      title: "Local Scope and Functions",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions/"
    },
    {
      title: "Return a Value from a Function with Return",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return/"
    },
    {
      title: "Assignment with a Returned Value",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value/"
    },
    {
      title: "Understanding Boolean Values",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/understanding-boolean-values/"
    },
    {
      title: "Use Conditional Logic with If Statements",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-conditional-logic-with-if-statements/"
    },
    {
      title: "Comparison with the Equality Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator/"
    },
    {
      title: "Comparison with the Strict Equality Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator/"
    },
    {
      title: "Comparison with the Inequality Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator/"
    },
    {
      title: "Comparison with the Strict Inequality Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator/"
    },
    {
      title: "Comparison with the Greater Than Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator/"
    },
    {
      title: "Comparison with the Greater Than Or Equal To Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator/"
    },
    {
      title: "Comparison with the Less Than Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-operator/"
    },
    {
      title: "Comparison with the Less Than Or Equal To Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-or-equal-to-operator/"
    },
    {
      title: "Comparisons with the Logical And Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator/"
    },
    {
      title: "Comparisons with the Logical Or Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator/"
    },
    {
      title: "Introducing Else Statements",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-statements/"
    },
    {
      title: "Introducing Else If Statements",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-if-statements/"
    },
    {
      title: "Logical Order in If Else Statements",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/logical-order-in-if-else-statements/"
    },
    {
      title: "Chaining If Else Statements",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements/"
    },
    {
      title: "Golf Code",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/golf-code/"
    },
    {
      title: "Selecting from many options with Switch Statements",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements/"
    },
    {
      title: "Adding a default option in Switch statements",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements/"
    },
    {
      title: "Multiple Identical Options in Switch Statements",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/multiple-identical-options-in-switch-statements/"
    },
    {
      title: "Replacing If Else Chains with Switch",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch/"
    },
    {
      title: "Returning Boolean Values from Functions",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/returning-boolean-values-from-functions/"
    },
    {
      title: "Return Early Pattern for Functions",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions/"
    },
    {
      title: "Counting Cards",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/counting-cards/"
    },
    {
      title: "Build JavaScript Objects",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects/"
    },
    {
      title: "Accessing Objects Properties with the Dot Operator",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-dot-notation/"
    },
    {
      title: "Accessing Objects Properties with Bracket Notation",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation/"
    },
    {
      title: "Accessing Objects Properties with Variables",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables/"
    },
    {
      title: "Updating Object Properties",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/updating-object-properties/"
    },
    {
      title: "Add New Properties to a JavaScript Object",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object/"
    },
    {
      title: "Delete Properties from a JavaScript Object",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/delete-properties-from-a-javascript-object/"
    },
    {
      title: "Using Objects for Lookups",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups/"
    },
    {
      title: "Iterate with JavaScript While Loops",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-while-loops/"
    },
    {
      title: "Iterate with JavaScript For Loops",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops/"
    },
    {
      title: "Iterate Odd Numbers With a For Loop",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-odd-numbers-with-a-for-loop/"
    },
    {
      title: "Count Backwards With a For Loop",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/count-backwards-with-a-for-loop/"
    },
    {
      title: "Iterate Through an Array with a For Loop",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop/"
    },
    {
      title: "Nesting For Loops",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops/"
    },
    {
      title: "Generate Random Whole Numbers with JavaScript",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-with-javascript/"
    },
    {
      title: "Generate Random Whole Numbers within a Range",
      link:
        "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-within-a-range/"
    }
  ];

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}

}
