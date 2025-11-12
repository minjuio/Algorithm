#include<iostream>
#include <cmath>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	cin>>T;
    
	for(test_case = 1; test_case <= T; ++test_case)
	{
	double sum = 0;
    int k;

    for (int j = 0; j < 10; j++) {
      cin >> k;
      sum += k;
    }
    cout << "#" << test_case << " " << round(sum / 10) << endl;
	}
	return 0;
}