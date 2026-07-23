// ============================================================
//  工具联动推荐配置（完整版 - 41个工具）
// ============================================================

const toolRecommendations = {
    // ===== 理财与储蓄 =====
    'compound-interest.html': {
        title: 'Your investment growth is just the beginning',
        recommendations: [
            {
                name: 'Retirement Savings Calculator',
                icon: '🏦',
                link: 'retirement-savings.html',
                params: { 'current-savings': 'finalAmount', 'monthly-contribution': 'monthly' },
                description: 'See how this fits into your retirement plan'
            },
            {
                name: 'Inflation Calculator',
                icon: '📉',
                link: 'inflation-calculator.html',
                params: { 'amount': 'finalAmount' },
                description: 'How much will inflation eat into your savings?'
            },
            {
                name: 'SIP Calculator',
                icon: '📈',
                link: 'sip-calculator.html',
                params: { 'monthly-investment': 'monthly' },
                description: 'Compare with a regular SIP strategy'
            }
        ]
    },

    'simple-interest.html': {
        title: 'Simple interest gives you a quick estimate',
        recommendations: [
            {
                name: 'Compound Interest Calculator',
                icon: '📈',
                link: 'compound-interest.html',
                params: { 'principal': 'principal', 'rate': 'rate', 'years': 'time' },
                description: 'See the power of compound interest'
            },
            {
                name: 'Fixed Deposit Calculator',
                icon: '🏦',
                link: 'fixed-deposit.html',
                params: { 'deposit-amount': 'principal', 'fd-rate': 'rate', 'fd-tenure': 'time' },
                description: 'Compare with fixed deposit returns'
            }
        ]
    },

    'fixed-deposit.html': {
        title: 'Your fixed deposit is growing steadily',
        recommendations: [
            {
                name: 'Compound Interest Calculator',
                icon: '📈',
                link: 'compound-interest.html',
                params: { 'principal': 'depositAmount', 'rate': 'rate', 'years': 'tenure' },
                description: 'Explore different investment scenarios'
            },
            {
                name: 'Recurring Deposit Calculator',
                icon: '💰',
                link: 'recurring-deposit.html',
                params: { 'rd-monthly': 'monthlyInvestment' },
                description: 'Compare with monthly recurring deposits'
            }
        ]
    },

    'recurring-deposit.html': {
        title: 'Your recurring deposit is building wealth',
        recommendations: [
            {
                name: 'Fixed Deposit Calculator',
                icon: '🏦',
                link: 'fixed-deposit.html',
                params: { 'deposit-amount': 'totalInvested' },
                description: 'Compare with a lump sum fixed deposit'
            },
            {
                name: 'SIP Calculator',
                icon: '📈',
                link: 'sip-calculator.html',
                params: { 'monthly-investment': 'monthlyDeposit' },
                description: 'See how SIP compares to RD'
            }
        ]
    },

    'savings-goal.html': {
        title: 'Your savings goal is within reach',
        recommendations: [
            {
                name: 'Investment Goal Planner',
                icon: '🎯',
                link: 'investment-goal.html',
                params: { 'goal-amount': 'goalAmount', 'current-savings': 'currentSavings' },
                description: 'Plan your investment strategy'
            },
            {
                name: 'SIP Calculator',
                icon: '📈',
                link: 'sip-calculator.html',
                params: { 'monthly-investment': 'monthlySavings' },
                description: 'See the power of monthly investing'
            }
        ]
    },

    'emergency-fund.html': {
        title: 'Your emergency fund is a safety net',
        recommendations: [
            {
                name: 'Savings Goal Planner',
                icon: '🎯',
                link: 'savings-goal.html',
                params: { 'goal-amount': 'targetFund' },
                description: 'Plan how to reach your target'
            },
            {
                name: 'Net Worth Calculator',
                icon: '📊',
                link: 'net-worth.html',
                params: { 'cash': 'currentFund' },
                description: 'See your complete financial picture'
            }
        ]
    },

    'inflation-calculator.html': {
        title: 'Inflation changes everything over time',
        recommendations: [
            {
                name: 'Compound Interest Calculator',
                icon: '📈',
                link: 'compound-interest.html',
                params: { 'principal': 'amount' },
                description: 'See how your savings need to grow'
            },
            {
                name: 'Retirement Savings Calculator',
                icon: '🏦',
                link: 'retirement-savings.html',
                params: { 'current-savings': 'adjustedValue' },
                description: 'Plan for inflation-adjusted retirement'
            }
        ]
    },

    'net-worth.html': {
        title: 'Your net worth is the big picture',
        recommendations: [
            {
                name: 'Emergency Fund Calculator',
                icon: '🛡️',
                link: 'emergency-fund.html',
                params: { 'current-fund': 'netWorth' },
                description: 'Build your safety net'
            },
            {
                name: 'Debt Consolidation Calculator',
                icon: '🔗',
                link: 'debt-consolidation.html',
                params: { 'current-balance': 'totalLiabilities' },
                description: 'Optimize your debt strategy'
            }
        ]
    },

    'lump-sum-growth.html': {
        title: 'Your lump sum investment is growing',
        recommendations: [
            {
                name: 'Compound Interest Calculator',
                icon: '📈',
                link: 'compound-interest.html',
                params: { 'principal': 'initialAmount', 'rate': 'growthRate', 'years': 'growthYears' },
                description: 'Compare with regular contributions'
            },
            {
                name: 'SIP vs Lump Sum Comparator',
                icon: '⚖️',
                link: 'sip-lumpsum.html',
                params: { 'total-investment': 'initialAmount' },
                description: 'SIP vs Lump Sum — which wins?'
            }
        ]
    },

    'budget-planner.html': {
        title: 'Your 50/30/20 budget is a solid foundation',
        recommendations: [
            {
                name: 'Savings Goal Planner',
                icon: '🎯',
                link: 'savings-goal.html',
                params: { 'goal-amount': 'savingsAmount' },
                description: 'Put your savings to work'
            },
            {
                name: 'Emergency Fund Calculator',
                icon: '🛡️',
                link: 'emergency-fund.html',
                params: { 'current-fund': 'savingsAmount' },
                description: 'Build your emergency fund'
            }
        ]
    },

    'salary-hourly.html': {
        title: 'Know your true hourly worth',
        recommendations: [
            {
                name: 'Budget Planner',
                icon: '📋',
                link: 'budget-planner.html',
                params: { 'monthly-income-budget': 'monthlyPay' },
                description: 'Plan your budget based on your income'
            },
            {
                name: 'Savings Goal Planner',
                icon: '🎯',
                link: 'savings-goal.html',
                params: { 'goal-amount': 'annualSalary' },
                description: 'Set a savings target'
            }
        ]
    },

    // ===== 贷款与抵押 =====
    'mortgage-payment.html': {
        title: 'Your mortgage is a big commitment — explore your options',
        recommendations: [
            {
                name: 'Mortgage Extra Payment Calculator',
                icon: '🚀',
                link: 'extra-payment.html',
                params: { 'loan-amount': 'loanAmount', 'interest-rate': 'interestRate', 'loan-term': 'loanTerm' },
                description: 'Pay it off faster and save thousands'
            },
            {
                name: 'Loan Amortization Calculator',
                icon: '📑',
                link: 'loan-amortization.html',
                params: { 'loan-amount': 'loanAmount', 'interest-rate': 'interestRate', 'loan-term': 'loanTerm' },
                description: 'See every payment, year by year'
            },
            {
                name: 'Loan Comparison Calculator',
                icon: '⚖️',
                link: 'loan-comparison.html',
                params: { 'amount1': 'loanAmount', 'rate1': 'interestRate', 'term1': 'loanTerm' },
                description: 'Compare this loan with other options'
            }
        ]
    },

    'extra-payment.html': {
        title: 'Extra payments can change everything',
        recommendations: [
            {
                name: 'Mortgage Payment Calculator',
                icon: '🏠',
                link: 'mortgage-payment.html',
                params: { 'loan-amount': 'loanAmount', 'interest-rate': 'interestRate', 'loan-term': 'loanTerm' },
                description: 'Start from scratch with a new loan'
            },
            {
                name: 'Loan Amortization Calculator',
                icon: '📑',
                link: 'loan-amortization.html',
                params: { 'loan-amount': 'loanAmount', 'interest-rate': 'interestRate', 'loan-term': 'loanTerm' },
                description: 'See the full repayment picture'
            }
        ]
    },

    'loan-amortization.html': {
        title: 'Understanding your amortization schedule helps you plan',
        recommendations: [
            {
                name: 'Mortgage Payment Calculator',
                icon: '🏠',
                link: 'mortgage-payment.html',
                params: { 'loan-amount': 'loanAmount', 'interest-rate': 'interestRate', 'loan-term': 'loanTerm' },
                description: 'Calculate your monthly payment'
            },
            {
                name: 'Mortgage Extra Payment Calculator',
                icon: '🚀',
                link: 'extra-payment.html',
                params: { 'loan-amount': 'loanAmount', 'interest-rate': 'interestRate', 'loan-term': 'loanTerm' },
                description: 'See the impact of extra payments'
            }
        ]
    },

    'loan-comparison.html': {
        title: 'Comparing loans is key to saving money',
        recommendations: [
            {
                name: 'Mortgage Payment Calculator',
                icon: '🏠',
                link: 'mortgage-payment.html',
                params: { 'loan-amount': 'amount1', 'interest-rate': 'rate1', 'loan-term': 'term1' },
                description: 'Start with a loan estimate'
            },
            {
                name: 'Loan Amortization Calculator',
                icon: '📑',
                link: 'loan-amortization.html',
                params: { 'loan-amount': 'amount1', 'interest-rate': 'rate1', 'loan-term': 'term1' },
                description: 'See the full schedule'
            }
        ]
    },

    'auto-loan.html': {
        title: 'Your auto loan is a major purchase',
        recommendations: [
            {
                name: 'Loan Comparison Calculator',
                icon: '⚖️',
                link: 'loan-comparison.html',
                params: { 'amount1': 'loanAmount', 'rate1': 'loanRate', 'term1': 'loanTerm' },
                description: 'Compare this loan with other options'
            },
            {
                name: 'Loan Amortization Calculator',
                icon: '📑',
                link: 'loan-amortization.html',
                params: { 'loan-amount': 'loanAmount', 'interest-rate': 'loanRate', 'loan-term': 'loanTerm' },
                description: 'See your full payment schedule'
            }
        ]
    },

    'affordability.html': {
        title: 'Knowing what you can afford is the first step',
        recommendations: [
            {
                name: 'Mortgage Payment Calculator',
                icon: '🏠',
                link: 'mortgage-payment.html',
                params: { 'loan-amount': 'maxLoan', 'interest-rate': 'interestRate', 'loan-term': 'loanTerm' },
                description: 'See your monthly payment'
            },
            {
                name: 'Budget Planner',
                icon: '📋',
                link: 'budget-planner.html',
                params: { 'monthly-income-budget': 'monthlyIncome' },
                description: 'Plan your overall budget'
            }
        ]
    },

    'apr-apy.html': {
        title: 'Understanding rates saves you money',
        recommendations: [
            {
                name: 'Loan Comparison Calculator',
                icon: '⚖️',
                link: 'loan-comparison.html',
                params: { 'rate1': 'nominalRate' },
                description: 'Compare loans with different rates'
            },
            {
                name: 'Mortgage Payment Calculator',
                icon: '🏠',
                link: 'mortgage-payment.html',
                params: { 'interest-rate': 'nominalRate' },
                description: 'Calculate your monthly payment'
            }
        ]
    },

    // ===== 债务管理 =====
    'debt-calculator.html': {
        title: 'Your debt payoff plan is working — keep it up!',
        recommendations: [
            {
                name: 'Debt Consolidation Calculator',
                icon: '🔗',
                link: 'debt-consolidation.html',
                params: { 'current-balance': 'totalDebt', 'current-payment': 'monthlyPayment' },
                description: 'Could consolidation save you money?'
            },
            {
                name: 'Debt Payoff Timer',
                icon: '⏳',
                link: 'debt-payoff-timer.html',
                params: { 'debt-amount': 'totalDebt', 'monthly-payment': 'monthlyPayment' },
                description: 'See your payoff timeline in detail'
            },
            {
                name: 'Budget Planner',
                icon: '📋',
                link: 'budget-planner.html',
                description: 'Optimize your monthly budget'
            }
        ]
    },

    'debt-payoff-timer.html': {
        title: 'Your payoff timeline is clear',
        recommendations: [
            {
                name: 'Debt Snowball / Avalanche Calculator',
                icon: '⛰️',
                link: 'debt-calculator.html',
                params: { 'totalDebt': 'debtAmount' },
                description: 'Compare payoff strategies'
            },
            {
                name: 'Debt Consolidation Calculator',
                icon: '🔗',
                link: 'debt-consolidation.html',
                params: { 'current-balance': 'debtAmount', 'current-payment': 'monthlyPayment' },
                description: 'Could consolidation help?'
            }
        ]
    },

    'debt-consolidation.html': {
        title: 'Consolidation could be a smart move',
        recommendations: [
            {
                name: 'Debt Snowball / Avalanche Calculator',
                icon: '⛰️',
                link: 'debt-calculator.html',
                params: { 'totalDebt': 'balance' },
                description: 'Compare with other payoff strategies'
            },
            {
                name: 'Budget Planner',
                icon: '📋',
                link: 'budget-planner.html',
                description: 'Plan your budget with your new payment'
            }
        ]
    },

    // ===== 投资与回报 =====
    'roi-calculator.html': {
        title: 'Your ROI tells the story of your investment',
        recommendations: [
            {
                name: 'CAGR Calculator',
                icon: '📈',
                link: 'cagr-calculator.html',
                params: { 'initial-value': 'initialInvestment', 'final-value': 'finalValue', 'cagr-years': 'investmentYears' },
                description: 'Calculate your annualized return'
            },
            {
                name: 'Compound Interest Calculator',
                icon: '📈',
                link: 'compound-interest.html',
                params: { 'principal': 'initialInvestment', 'rate': 'roi' },
                description: 'Explore different investment scenarios'
            }
        ]
    },

    'investment-goal.html': {
        title: 'Your investment goal is achievable',
        recommendations: [
            {
                name: 'SIP Calculator',
                icon: '📈',
                link: 'sip-calculator.html',
                params: { 'monthly-investment': 'monthlyContribution' },
                description: 'See the power of regular investing'
            },
            {
                name: 'Retirement Savings Calculator',
                icon: '🏦',
                link: 'retirement-savings.html',
                params: { 'current-savings': 'goalAmount' },
                description: 'Plan for your future'
            }
        ]
    },

    'drip-calculator.html': {
        title: 'DRIP can supercharge your returns',
        recommendations: [
            {
                name: 'Compound Interest Calculator',
                icon: '📈',
                link: 'compound-interest.html',
                params: { 'principal': 'initialInvestment' },
                description: 'See the power of compounding'
            },
            {
                name: 'ROI Calculator',
                icon: '📊',
                link: 'roi-calculator.html',
                params: { 'initial-investment': 'initialInvestment', 'final-value': 'finalValue' },
                description: 'Calculate your total return'
            }
        ]
    },

    'cagr-calculator.html': {
        title: 'CAGR gives you the big picture',
        recommendations: [
            {
                name: 'ROI Calculator',
                icon: '📊',
                link: 'roi-calculator.html',
                params: { 'initial-investment': 'initialValue', 'final-value': 'finalValue', 'investment-years': 'years' },
                description: 'Calculate your total return'
            },
            {
                name: 'Compound Interest Calculator',
                icon: '📈',
                link: 'compound-interest.html',
                params: { 'principal': 'initialValue', 'rate': 'cagr', 'years': 'years' },
                description: 'See the growth path'
            }
        ]
    },

    'npv-calculator.html': {
        title: 'NPV tells you if an investment is worth it',
        recommendations: [
            {
                name: 'ROI Calculator',
                icon: '📊',
                link: 'roi-calculator.html',
                params: { 'initial-investment': 'initialInvestment', 'final-value': 'totalCashflows' },
                description: 'Calculate your total return'
            },
            {
                name: 'CAGR Calculator',
                icon: '📈',
                link: 'cagr-calculator.html',
                params: { 'initial-value': 'initialInvestment', 'final-value': 'totalCashflows' },
                description: 'Calculate your annualized return'
            }
        ]
    },

    'crypto-growth.html': {
        title: 'Your crypto portfolio is on a journey',
        recommendations: [
            {
                name: 'Compound Interest Calculator',
                icon: '📈',
                link: 'compound-interest.html',
                params: { 'principal': 'initialInvestment', 'rate': 'annualReturn' },
                description: 'See how compounding works'
            },
            {
                name: 'ROI Calculator',
                icon: '📊',
                link: 'roi-calculator.html',
                params: { 'initial-investment': 'initialInvestment', 'final-value': 'finalValue' },
                description: 'Calculate your total return'
            }
        ]
    },

    'sip-lumpsum.html': {
        title: 'Choosing between SIP and Lump Sum is a big decision',
        recommendations: [
            {
                name: 'SIP Calculator',
                icon: '📈',
                link: 'sip-calculator.html',
                params: { 'monthly-investment': 'monthlyAmount' },
                description: 'Explore your SIP strategy'
            },
            {
                name: 'Lump Sum Growth Calculator',
                icon: '📈',
                link: 'lump-sum-growth.html',
                params: { 'initial-amount': 'totalInvestment' },
                description: 'See your lump sum growth'
            }
        ]
    },

    // ===== 退休与FIRE =====
    'fire-calculator.html': {
        title: 'Your FIRE number is just the start',
        recommendations: [
            {
                name: 'Coast FIRE Calculator',
                icon: '🏖️',
                link: 'coast-fire.html',
                params: { 'current-savings': 'savings', 'annual-spending': 'spending' },
                description: 'Could you already be Coast FIRE?'
            },
            {
                name: '4% Rule Calculator',
                icon: '📊',
                link: 'four-percent.html',
                params: { 'nestegg': 'fireNumber' },
                description: 'Test your withdrawal strategy'
            },
            {
                name: 'Retirement Age Calculator',
                icon: '🎂',
                link: 'retirement-age.html',
                params: { 'current-savings': 'savings', 'retirement-spending': 'spending' },
                description: 'When will you actually retire?'
            }
        ]
    },

    'coast-fire.html': {
        title: 'Coast FIRE gives you freedom',
        recommendations: [
            {
                name: 'FIRE Number Calculator',
                icon: '🔥',
                link: 'fire-calculator.html',
                params: { 'spending': 'annualSpending' },
                description: 'Calculate your full FIRE number'
            },
            {
                name: 'Retirement Age Calculator',
                icon: '🎂',
                link: 'retirement-age.html',
                params: { 'current-savings': 'currentSavings', 'retirement-spending': 'annualSpending' },
                description: 'When can you actually retire?'
            },
            {
                name: '4% Rule Calculator',
                icon: '📊',
                link: 'four-percent.html',
                params: { 'nestegg': 'fireNumber' },
                description: 'Test your withdrawal strategy'
            }
        ]
    },

    'four-percent.html': {
        title: 'The 4% rule gives you a target to aim for',
        recommendations: [
            {
                name: 'FIRE Number Calculator',
                icon: '🔥',
                link: 'fire-calculator.html',
                params: { 'spending': 'annualSpending' },
                description: 'Calculate your full FIRE number'
            },
            {
                name: 'Retirement Withdrawal Calculator',
                icon: '🏦',
                link: 'retirement-withdrawal.html',
                params: { 'retirement-savings': 'nestEgg' },
                description: 'Test different withdrawal strategies'
            },
            {
                name: 'Coast FIRE Calculator',
                icon: '🏖️',
                link: 'coast-fire.html',
                params: { 'annual-spending': 'annualSpending' },
                description: 'Could you already be Coast FIRE?'
            }
        ]
    },

    'retirement-savings.html': {
        title: 'Your retirement savings are on track — keep going!',
        recommendations: [
            {
                name: 'Retirement Withdrawal Calculator',
                icon: '🏦',
                link: 'retirement-withdrawal.html',
                params: { 'retirement-savings': 'finalValue' },
                description: 'How much can you withdraw each year?'
            },
            {
                name: '401(k) / Pension Calculator',
                icon: '📈',
                link: '401k-calculator.html',
                params: { 'current-balance': 'currentSavings' },
                description: 'Compare with a 401(k) plan'
            },
            {
                name: 'Roth IRA Calculator',
                icon: '📊',
                link: 'roth-ira-calculator.html',
                params: { 'roth-current-balance': 'currentSavings' },
                description: 'Compare with a Roth IRA'
            }
        ]
    },

    'retirement-withdrawal.html': {
        title: 'Your withdrawal plan is set — now you can relax',
        recommendations: [
            {
                name: 'Retirement Savings Calculator',
                icon: '🏦',
                link: 'retirement-savings.html',
                params: { 'current-savings': 'savings' },
                description: 'Build your savings plan'
            },
            {
                name: 'Income Replacement Ratio Calculator',
                icon: '📈',
                link: 'income-replacement.html',
                params: { 'pre-retirement-income': 'annualIncome' },
                description: 'Will your retirement income be enough?'
            },
            {
                name: '4% Rule Calculator',
                icon: '📊',
                link: 'four-percent.html',
                params: { 'nestegg': 'retirementSavings' },
                description: 'Test the 4% rule on your savings'
            }
        ]
    },

    '401k-calculator.html': {
        title: 'Your retirement account is growing — explore your options',
        recommendations: [
            {
                name: 'Retirement Withdrawal Calculator',
                icon: '🏦',
                link: 'retirement-withdrawal.html',
                params: { 'retirement-savings': 'finalBalance' },
                description: 'How much can you withdraw each year?'
            },
            {
                name: 'Roth IRA Calculator',
                icon: '📊',
                link: 'roth-ira-calculator.html',
                params: { 'roth-current-balance': 'currentBalance' },
                description: 'Compare Roth IRA growth'
            },
            {
                name: 'Income Replacement Ratio Calculator',
                icon: '📈',
                link: 'income-replacement.html',
                params: { 'pre-retirement-income': 'annualIncome' },
                description: 'Will your retirement income be enough?'
            }
        ]
    },

    'retirement-age.html': {
        title: 'Knowing when you can retire is life-changing',
        recommendations: [
            {
                name: 'FIRE Number Calculator',
                icon: '🔥',
                link: 'fire-calculator.html',
                params: { 'spending': 'retirementSpending' },
                description: 'Calculate your FIRE number'
            },
            {
                name: 'Coast FIRE Calculator',
                icon: '🏖️',
                link: 'coast-fire.html',
                params: { 'current-savings': 'currentSavings', 'annual-spending': 'retirementSpending' },
                description: 'Could you already be Coast FIRE?'
            },
            {
                name: 'Retirement Savings Calculator',
                icon: '🏦',
                link: 'retirement-savings.html',
                params: { 'current-savings': 'currentSavings' },
                description: 'Build your retirement savings'
            }
        ]
    },

    'retirement-need.html': {
        title: 'Knowing your retirement need gives you clarity',
        recommendations: [
            {
                name: 'Retirement Savings Calculator',
                icon: '🏦',
                link: 'retirement-savings.html',
                params: { 'current-savings': 'targetSavings' },
                description: 'Plan how to reach your target'
            },
            {
                name: 'FIRE Number Calculator',
                icon: '🔥',
                link: 'fire-calculator.html',
                params: { 'spending': 'desiredIncome' },
                description: 'Calculate your FIRE number'
            }
        ]
    },

    'roth-ira-calculator.html': {
        title: 'Your Roth IRA is growing tax-free',
        recommendations: [
            {
                name: '401(k) / Pension Calculator',
                icon: '📈',
                link: '401k-calculator.html',
                params: { 'current-balance': 'rothCurrentBalance' },
                description: 'Compare with a 401(k) plan'
            },
            {
                name: 'Retirement Savings Calculator',
                icon: '🏦',
                link: 'retirement-savings.html',
                params: { 'current-savings': 'rothCurrentBalance' },
                description: 'Plan your overall retirement'
            },
            {
                name: 'Income Replacement Ratio Calculator',
                icon: '📈',
                link: 'income-replacement.html',
                description: 'Will your retirement income be enough?'
            }
        ]
    },

    'income-replacement.html': {
        title: 'Your income replacement ratio shows your readiness',
        recommendations: [
            {
                name: 'Retirement Withdrawal Calculator',
                icon: '🏦',
                link: 'retirement-withdrawal.html',
                params: { 'retirement-savings': 'neededFromSavings' },
                description: 'Calculate your withdrawal strategy'
            },
            {
                name: 'FIRE Number Calculator',
                icon: '🔥',
                link: 'fire-calculator.html',
                params: { 'spending': 'targetIncome' },
                description: 'Calculate your FIRE number'
            }
        ]
    },

    // ===== SIP与定投 =====
    'sip-calculator.html': {
        title: 'Your SIP is building long-term wealth',
        recommendations: [
            {
                name: 'SIP vs Lump Sum Comparator',
                icon: '⚖️',
                link: 'sip-lumpsum.html',
                params: { 'total-investment': 'totalInvested', 'sip-months': 'months' },
                description: 'Which strategy works better for you?'
            },
            {
                name: 'Investment Goal Planner',
                icon: '🎯',
                link: 'investment-goal.html',
                params: { 'current-savings': 'totalInvested' },
                description: 'Are you on track to reach your goals?'
            },
            {
                name: 'Compound Interest Calculator',
                icon: '📈',
                link: 'compound-interest.html',
                params: { 'monthly': 'monthlyInvestment' },
                description: 'See the power of compounding'
            }
        ]
    },

    // ===== 保险与风控 =====
    'life-insurance.html': {
        title: 'Protecting your loved ones is the most important decision',
        recommendations: [
            {
                name: 'Emergency Fund Calculator',
                icon: '🛡️',
                link: 'emergency-fund.html',
                params: { 'current-fund': 'coverage' },
                description: 'Build your emergency safety net'
            },
            {
                name: 'Net Worth Calculator',
                icon: '📊',
                link: 'net-worth.html',
                description: 'See your complete financial picture'
            }
        ]
    },

    // ===== 税务 =====
    'sales-tax.html': {
        title: 'Know exactly how much you\'re paying in tax',
        recommendations: [
            {
                name: 'Budget Planner',
                icon: '📋',
                link: 'budget-planner.html',
                description: 'Plan your budget with taxes in mind'
            }
        ]
    }
};

// ============================================================
//  显示推荐工具
// ============================================================

function showRecommendations(toolName, values) {
    const config = toolRecommendations[toolName];
    if (!config) {
        // 没有配置的工具，显示通用推荐
        return showGenericRecommendations();
    }

    const container = document.getElementById('recommendations-area');
    if (!container) return;

    // 检查是否有有效的推荐（至少有一个链接可用）
    let hasValidRecommendation = false;
    for (const rec of config.recommendations) {
        if (rec.link && rec.link !== '#') {
            hasValidRecommendation = true;
            break;
        }
    }
    if (!hasValidRecommendation) return;

    let html = `
        <div style="margin-top:1.8rem; padding:1.2rem; background:#f8fafc; border-radius:12px; border:1px solid #e9edf2;">
            <p style="font-size:0.95rem; color:#475569; margin-bottom:0.8rem; font-weight:500;">
                💡 ${config.title}
            </p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.8rem;">
    `;

    for (const rec of config.recommendations) {
        if (!rec.link || rec.link === '#') continue;
        const paramStr = buildParamString(rec.params, values);
        const url = paramStr ? rec.link + '?' + paramStr : rec.link;

        html += `
            <a href="${url}" style="display:block; background:white; padding:0.8rem 1rem; border-radius:10px; text-decoration:none; color:#1e293b; border:1px solid #e9edf2; transition:all 0.15s;"
               onmouseover="this.style.borderColor='#2563eb';this.style.boxShadow='0 2px 8px rgba(37,99,235,0.1)';"
               onmouseout="this.style.borderColor='#e9edf2';this.style.boxShadow='none';">
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <span style="font-size:1.2rem;">${rec.icon}</span>
                    <span style="font-weight:600; font-size:0.9rem;">${rec.name}</span>
                </div>
                <p style="font-size:0.8rem; color:#94a3b8; margin:0.2rem 0 0;">${rec.description}</p>
            </a>
        `;
    }

    html += `
            </div>
        </div>
    `;

    container.innerHTML = html;
}

function showGenericRecommendations() {
    const container = document.getElementById('recommendations-area');
    if (!container) return;

    container.innerHTML = `
        <div style="margin-top:1.8rem; padding:1.2rem; background:#f8fafc; border-radius:12px; border:1px solid #e9edf2;">
            <p style="font-size:0.95rem; color:#475569; margin-bottom:0.8rem; font-weight:500;">
                💡 Explore more tools to plan your finances
            </p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.8rem;">
                <a href="compound-interest.html" style="display:block; background:white; padding:0.8rem 1rem; border-radius:10px; text-decoration:none; color:#1e293b; border:1px solid #e9edf2; transition:all 0.15s;"
                   onmouseover="this.style.borderColor='#2563eb';this.style.boxShadow='0 2px 8px rgba(37,99,235,0.1)';"
                   onmouseout="this.style.borderColor='#e9edf2';this.style.boxShadow='none';">
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                        <span style="font-size:1.2rem;">📈</span>
                        <span style="font-weight:600; font-size:0.9rem;">Compound Interest</span>
                    </div>
                    <p style="font-size:0.8rem; color:#94a3b8; margin:0.2rem 0 0;">See how your savings grow</p>
                </a>
                <a href="fire-calculator.html" style="display:block; background:white; padding:0.8rem 1rem; border-radius:10px; text-decoration:none; color:#1e293b; border:1px solid #e9edf2; transition:all 0.15s;"
                   onmouseover="this.style.borderColor='#2563eb';this.style.boxShadow='0 2px 8px rgba(37,99,235,0.1)';"
                   onmouseout="this.style.borderColor='#e9edf2';this.style.boxShadow='none';">
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                        <span style="font-size:1.2rem;">🔥</span>
                        <span style="font-weight:600; font-size:0.9rem;">FIRE Calculator</span>
                    </div>
                    <p style="font-size:0.8rem; color:#94a3b8; margin:0.2rem 0 0;">Plan your early retirement</p>
                </a>
                <a href="mortgage-payment.html" style="display:block; background:white; padding:0.8rem 1rem; border-radius:10px; text-decoration:none; color:#1e293b; border:1px solid #e9edf2; transition:all 0.15s;"
                   onmouseover="this.style.borderColor='#2563eb';this.style.boxShadow='0 2px 8px rgba(37,99,235,0.1)';"
                   onmouseout="this.style.borderColor='#e9edf2';this.style.boxShadow='none';">
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                        <span style="font-size:1.2rem;">🏠</span>
                        <span style="font-weight:600; font-size:0.9rem;">Mortgage Payment</span>
                    </div>
                    <p style="font-size:0.8rem; color:#94a3b8; margin:0.2rem 0 0;">Calculate your monthly payment</p>
                </a>
            </div>
        </div>
    `;
}

function buildParamString(paramMap, values) {
    const params = [];
    for (const [targetKey, sourceKey] of Object.entries(paramMap)) {
        let value = values[sourceKey];
        if (value !== undefined && value !== null && value !== '') {
            if (typeof value === 'string') {
                value = value.replace(/[^0-9.]/g, '');
            }
            if (value && !isNaN(value) && value > 0) {
                params.push(`${targetKey}=${encodeURIComponent(value)}`);
            }
        }
    }
    return params.join('&');
}
