#include <iostream>
using namespace std;

char compare(int a, int b) {
  char result;
  if (a > b) {
    result = '>';
  } else if (a == b) {
    result = '=';
  } else {
    result = '<';
  }
  return result;
}

int main(int argc, char** argv) {
  int test_case;
  int T;
  cin >> T;

  for (test_case = 1; test_case <= T; ++test_case) {
    int a, b;
    cin >> a >> b;
    cout << "#" << test_case << " " << compare(a, b) << endl;
  }
  return 0;
}