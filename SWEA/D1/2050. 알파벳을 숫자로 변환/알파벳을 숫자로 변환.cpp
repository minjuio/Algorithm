#include <iostream>
using namespace std;

int main(int argc, char** argv) {
  string str;
  cin >> str;

  for (int i = 0; i < str.length(); i++) {
    cout << str[i] - 64 << " ";
  }
  return 0;
}