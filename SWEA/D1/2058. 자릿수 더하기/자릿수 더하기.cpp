#include <iostream>

using namespace std;

int main(int argc, char** argv) {
  int test_case;
  int T;

  cin >> T;

  for (test_case = 1; test_case <= T; ++test_case) {
    // 음 만약에 23이 들어오면
    // c++에서는...?
    int sum = 0;
    while (T > 0) {
      sum += T % 10;
      T /= 10;
    }
    cout << sum << endl;
  }
  return 0;
}