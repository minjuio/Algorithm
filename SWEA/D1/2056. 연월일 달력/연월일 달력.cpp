#include <stdio.h>

int main(int argc, char** argv) {
  int test_case;
  int T, y, m, d;
  int days[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
  scanf("%d", &T);

  for (test_case = 1; test_case <= T; ++test_case) {
    scanf("%4d%2d%2d", &y, &m, &d);
    if (m >= 1 && m <= 12 && d >= 1 && d <= days[m]) {
      printf("#%d %04d/%02d/%02d\n", test_case, y, m, d);
    } else {
      printf("#%d -1\n", test_case);
    }
  }
  return 0;
}