import statistics
import math

lst1 = [1, 2, 3]
lst2 = [4, 5, 6]

def pirsons_correlation(lst1, lst2):
    average1 = statistics.mean(lst1)
    average2 = statistics.mean(lst2)
    numerator = 0    
    sum_x_pow2 = 0
    sum_y_pow2 = 0

    for i in range(len(lst1)):
        numerator += (lst1[i] - average1) * (lst2[i] - average2)
        sum_x_pow2 += (lst1[i] - average1)**2 
        sum_y_pow2 += (lst2[i] - average2)**2

    denominator = math.sqrt(sum_x_pow2 * sum_y_pow2)    
    return numerator / denominator

print(pirsons_correlation(lst1, lst2))
