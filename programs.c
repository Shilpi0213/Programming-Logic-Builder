#include <stdio.h>

int main() {
    int n, a, b, fact = 1, count = 0;

    printf("Enter a number: ");
    scanf("%d", &n);

    // Even or Odd
    if(n % 2 == 0)
        printf("Even Number\n");
    else
        printf("Odd Number\n");

    // Positive or Negative
    if(n >= 0)
        printf("Positive Number\n");
    else
        printf("Negative Number\n");

    // Factorial
    for(int i = 1; i <= n; i++)
        fact *= i;

    printf("Factorial = %d\n", fact);

    return 0;
}