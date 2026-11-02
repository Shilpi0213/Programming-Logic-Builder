#include <iostream>
using namespace std;

int main() {
    int n, fact = 1;

    cout << "Enter a number: ";
    cin >> n;

    // Even or Odd
    if(n % 2 == 0)
        cout << "Even Number\n";
    else
        cout << "Odd Number\n";

    // Positive or Negative
    if(n >= 0)
        cout << "Positive Number\n";
    else
        cout << "Negative Number\n";

    // Factorial
    for(int i = 1; i <= n; i++)
        fact *= i;

    cout << "Factorial = " << fact << endl;

    return 0;
}