#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main(int argc, char** argv) {
  int test_case;
  int T;

  cin >> T;

  // 배열 선언
  vector<int> arr(T);

  for (test_case = 1; test_case <= T; ++test_case) {
    // 배열에 전부 저장
    cin >> arr[test_case - 1];
  }
  // 배열을 오름차순
  // int index = (T+1)/2;
  // arr[index]이 mid 값...
  sort(arr.begin(), arr.end());

  cout << arr[T / 2] << endl;
  return 0;
}