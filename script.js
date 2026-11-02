function showProblem(problem) {

    let title = "";
    let logic = "";
    let cCode = "";
    let cppCode = "";
    let input = "";
    let output = "";

    // EVEN OR ODD
    if (problem === "even") {

        title = "Even or Odd";

        logic = "If number is divisible by 2, it is Even. Otherwise, it is Odd.";

        input = "8";
        output = "Even";

        cCode = `int n;
scanf("%d", &n);

if(n % 2 == 0)
    printf("Even");
else
    printf("Odd");`;

        cppCode = `int n;
cin >> n;

if(n % 2 == 0)
    cout << "Even";
else
    cout << "Odd";`;
    }


    // POSITIVE OR NEGATIVE
    else if (problem === "positive") {

        title = "Positive or Negative";

        logic = "If number is greater than or equal to 0, it is Positive. Otherwise, it is Negative.";

        input = "-5";
        output = "Negative";

        cCode = `int n;
scanf("%d", &n);

if(n >= 0)
    printf("Positive");
else
    printf("Negative");`;

        cppCode = `int n;
cin >> n;

if(n >= 0)
    cout << "Positive";
else
    cout << "Negative";`;
    }


    // LARGEST OF TWO
    else if (problem === "largest") {

        title = "Largest of Two Numbers";

        logic = "Compare both numbers. The greater number is the largest.";

        input = "10 20";
        output = "20";

        cCode = `int a, b;
scanf("%d %d", &a, &b);

if(a > b)
    printf("%d", a);
else
    printf("%d", b);`;

        cppCode = `int a, b;
cin >> a >> b;

if(a > b)
    cout << a;
else
    cout << b;`;
    }


    // PRIME NUMBER
    else if (problem === "prime") {

        title = "Prime Number";

        logic = "A prime number has only two factors: 1 and itself.";

        input = "7";
        output = "Prime";

        cCode = `int n, count = 0;
scanf("%d", &n);

for(int i = 1; i <= n; i++)
    if(n % i == 0)
        count++;

if(count == 2)
    printf("Prime");
else
    printf("Not Prime");`;

        cppCode = `int n, count = 0;
cin >> n;

for(int i = 1; i <= n; i++)
    if(n % i == 0)
        count++;

if(count == 2)
    cout << "Prime";
else
    cout << "Not Prime";`;
    }


    // FACTORIAL
    else if (problem === "factorial") {

        title = "Factorial";

        logic = "Factorial is the product of all positive numbers from 1 to n.";

        input = "5";
        output = "120";

        cCode = `int n, fact = 1;
scanf("%d", &n);

for(int i = 1; i <= n; i++)
    fact = fact * i;

printf("%d", fact);`;

        cppCode = `int n, fact = 1;
cin >> n;

for(int i = 1; i <= n; i++)
    fact = fact * i;

cout << fact;`;
    }


    // DISPLAY EVERYTHING ON WEBPAGE

    document.getElementById("problemTitle").innerText = title;

    document.getElementById("logic").innerText = logic;

    document.getElementById("input").innerText = input;

    document.getElementById("output").innerText = output;

    document.getElementById("cCode").innerText = cCode;

    document.getElementById("cppCode").innerText = cppCode;
}