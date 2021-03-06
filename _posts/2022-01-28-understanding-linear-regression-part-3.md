---
title: Understanding Linear Regression [3/3]
layout: single
author_profile: true
read_time: true
categories: [Machine Learning]
excerpt : Multiple Linear Regression
---
 
Now that you have estimated the parameters for simple linear regression with OLS let's do the same for multiple linear regression.

From L1 content, you have the idea of Multiple Linear Regression. Let's recall a bit. Multiple linear regression generalizes simple linear regression by allowing more than one input variable: π₯1,π₯2,β¦,π₯π . The goal of multiple linear regression is to find a relationship between the input variables and the output variable. This relationship is represented mathematically as follows:

<figure>
	<img src="/images/8_1.png">
	<figcaption></figcaption>
</figure>

π½1 through π½π are the estimated regression coefficients for the independent variables  π₯1  through  π₯π . As in simple linear regression, the regression model to get actual output variable is:

<figure>
	<img src="/images/8_2.png">
	<figcaption></figcaption>
</figure>

π is the random error or residual, which reflects the difference between the actual output point and predicted output point.

Multiple linear regression involves more than one input variable, so it is impossible to individually derive a solution for each regression coefficient for each input variable. In a sophisticated regression problem dimension (π ) can range to very higher values.

So, how do we estimate all regression coefficients?

From multiple linear regresssion model, we have:

<figure>
	<img src="/images/8_3.png">
	<figcaption></figcaption>
</figure>

We have π set of observations. So we can write:

<figure>
	<img src="/images/8_4.png">
	<figcaption></figcaption>
</figure>

Xnd  is the πth observation for  πth feature or input variable. These π set of equations can be written in matrix form as:

<figure>
	<img src="/images/8_5.png">
	<figcaption></figcaption>
</figure>

Using mathematical notations, we can write as:

<figure>
	<img src="/images/8_6.png">
	<figcaption></figcaption>
</figure>

π² is a nΓ1 column matrix where each element is the observed value of output variable. Similarly, π is nΓ(d+1)  matrix. An extra dimension is due to the inclusion of 1β²π  in the first column. You can interpret the first column, including 1β²s as being multiplied against π½0. There are (d+1) unknown parameters, d regression coefficients for each of the input variables and 1 extra for the intercept, π½0 .So π· is (d+1)Γ1 column matrix.

By now, we addressed the multiple features and multiple unknown parameters properly in the form of a matrix. Now, we roll back to the principle of OLS to determine the unknown parameters.

From OLS, our objective is to find a column matrix or a column vector, π·, such that Sum of Squared Errors, SSE is minimum. SSE is written as:

<figure>
	<img src="/images/8_7.png">
	<figcaption></figcaption>
</figure>

Since

<figure>
	<img src="/images/8_8.png">
	<figcaption></figcaption>
</figure>

We can also write SSE as:

<figure>
	<img src="/images/8_9.png">
	<figcaption></figcaption>
</figure>

From equation (1), we know that

<figure>
	<img src="/images/8_10.png">
	<figcaption></figcaption>
</figure>

so we can also write  SSE  as:

<figure>
	<img src="/images/8_11.png">
	<figcaption></figcaption>
</figure>

This positive quadratic error function or SSE or objective function is always a convex surface facing upwards as in a simple linear equation. From calculus, the value of parameters at the minimum point is obtained by setting the first derivative of the objective function, with respect to the parameters, equal to 0. So, we will take the partial derivative of the objective function, with respect to π·, and get the value for the column matrix, π·.

<figure>
	<img src="/images/8_12.png">
	<figcaption></figcaption>
</figure>

You can take a pen and paper and try expanding the product term to the sums. You have to use basic transpose rules and matrix multiplication rules. That's it! Now, we will set the derivative to 0 as:

<figure>
	<img src="/images/8_13.png">
	<figcaption></figcaption>
</figure>

As we saw for the column vector Ο΅ we know:

<figure>
	<img src="/images/8_14.png">
	<figcaption></figcaption>
</figure>


This can be written as:

<figure>
	<img src="/images/8_15.png">
	<figcaption></figcaption>
</figure>

Cancelling 2 on both sides and isolating Ξ², we get:

<figure>
	<img src="/images/8_15.png">
	<figcaption></figcaption>
</figure>





