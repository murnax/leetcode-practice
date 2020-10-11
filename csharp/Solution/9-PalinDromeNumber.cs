namespace Solution
{
    public class PalinDromeNumber
    {
        public static bool Solution(int x)
        {
            int originValue = x;
            if (x < 0) return false;
            if (x == 0) return true;

            int reversedValue = 0;
            while (x > 0)
            {
                reversedValue = (reversedValue * 10) + (x % 10);
                x /= 10;
            }
            return originValue == reversedValue;
        }
    }
}
