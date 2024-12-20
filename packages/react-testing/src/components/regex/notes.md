Meta characters types
1. single meta characters: specify which type of character to target
-> \s(space) \d(digit) \w(word)[0-9a-zA-Z]
-> Capitals means opposite: \S(not-space) \D not a digit

2. Quantifiers: specify how many characters to target
-> . (any 1 character) .+ (1 or more) .* (0 or more) --> match everything
-> a{min, max} a{exact} --> a{3} matches aaa or aaaa

3. position: specify where chars begin/end
-> ^ : start of string (^abcd)
-> $: end of string

4. character classes: used to match a sequence of chars like [a-z] or [A-Z]
-> [a(cddef] -> matches a or c or d or e or f or open brace.  