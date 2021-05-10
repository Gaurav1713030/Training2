using System;

namespace Consecutive_sum
{
  class Program
  {
    static void Main(string[] args)
    {
      int[] a = { 1, 4, 4, 4, 0, 3, 4 };
      int count = 1;
     
      for (int i = 0; i < a.Length; i++)
      {if(i==a.Length-1)
        {
          Console.WriteLine(a[a.Length - 1]);
          break;
        }
       if(a[i]==a[i+1])
        {
          count++;
          if(i!=a.Length-2)
           continue;
        }


        Console.WriteLine(a[i] * count);
        

       
        count = 1;
     


        }


        }


    } }
    

