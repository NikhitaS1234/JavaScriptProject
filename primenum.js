var num = 37;
    var flag = false;
    for (var i = 2; i <= num / 2; ++i) {
      // condition for nonprime number
      if (num % i == 0) {
        flag = true;
        break;
      }
    }

    if (!flag)
        {
      console.log(num + " is a prime number.");
        }
    else
    {
      console.log(num + " is not a prime number.");
    }
