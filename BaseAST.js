class BaseAST {
    static assignmentExpression(left, right, operator = '=') {
        return {
            type: 'AssignmentExpression',
            operator,
            left,
            right,
        };
    };

    static assignmentPattern(left, right) {
        return {
            type: 'AssignmentPattern',
            left,
            right,
        };
    };

    static arrayExpression(elements) {
        return {
            type: 'ArrayExpression',
            elements,
        };
    };

    static arrayPattern(elements) {
        return {
            type: 'ArrayPattern',
            elements,
        };
    };

    static arrowFunctionExpression(params, body, async = false) {
        return {
            type: 'ArrowFunctionExpression',
            params,
            body,
            async,
        };
    };

    static awaitExpression(argument) {
        return {
            type: 'AwaitExpression',
            argument,
        };
    };

    static blockStatement(body) {
        return {
            type: 'BlockStatement',
            body,
        };
    };

    static binaryExpression(operator, left, right) {
        return {
            type: 'BinaryExpression',
            operator,
            left,
            right,
        };
    };

    static breakStatement(label = null) {
        return {
            type: 'BreakStatement',
            label,
        };
    };

    static callExpression(callee, args) {
        return {
            type: 'CallExpression',
            callee,
            arguments: args,
        };
    };

    static catchClause(param, body) {
        return {
            type: 'CatchClause',
            param,
            body,
        };
    };

    static classBody(body) {
        return {
            type: 'ClassBody',
            body,
        };
    };

    static classDeclaration(id, body, superClass = null) {
        return {
            type: 'ClassDeclaration',
            id,
            superClass,
            body,
        }
    };

    static classExpression(id, body, superClass = null) {
        return {
            type: 'ClassExpression',
            id,
            superClass,
            body,
        };
    };

    static conditionalExpression(test, consequent, alternate) {
        return {
            type: 'ConditionalExpression',
            test,
            consequent,
            alternate,
        };
    };

    static thisExpression() {
        return {
            type: 'ThisExpression',
        };
    };

    static literal(value) {
        return {
            type: 'Literal',
            value,
        };
    };

    static returnStatement(argument) {
        return {
            type: 'ReturnStatement',
            argument,
        };
    };

    static throwStatement(argument) {
        return {
            type: 'ThrowStatement',
            argument,
        }
    };

    static objectPattern(properties) {
        return {
            type: "ObjectPattern",
            properties,
        }
    };

    static objectExpression(properties) {
        return {
            type: 'ObjectExpression',
            properties,
        };
    };

    static functionExpression(params, body, async = false) {
        return {
            type: 'FunctionExpression',
            params,
            body,
            async,
        };
    };

    static expressionStatement(expression) {
        return {
            type: 'ExpressionStatement',
            expression,
        };
    };

    static identifier(name) {
        return {
            type: 'Identifier',
            name,
        }
    };

    static property(key, value, shorthand = false) {
        return {
            type: 'Property',
            key,
            value,
            computed: key.type === 'MemberExpression',
            method: value.type === 'FunctionExpression',
            shorthand,
        };
    };

    static memberExpression(object, property, computed = false) {
        return {
            type: 'MemberExpression',
            object,
            property,
            computed,
        };
    };

    static exportDefault(declaration) {
        return {
            type: 'ExportDefaultDeclaration',
            declaration,
        };
    };

    static program(body) {
        return {
            type: 'Program',
            body,
            sourceType: 'module',
        };
    };

    static exportNamedDeclaration(declaration) {
        return {
            type: 'ExportNamedDeclaration',
            declaration,
            source: null,
            specifiers: [],
        };
    };

    static variableDeclarator(id, init) {
        return {
            type: 'VariableDeclarator',
            id,
            init,
        }
    };

    static importNamespaceSpecifier(local) {
        return {
            type: 'ImportNamespaceSpecifier',
            local,
        };
    };

    static importDefaultSpecifier(local) {
        return {
            type: 'ImportDefaultSpecifier',
            local,
        };
    };

    static variableDeclaration(kind, declarations) {
        return {
            type: 'VariableDeclaration',
            declarations,
            kind,
        };
    };

    static importDeclaration(specifiers, source) {
        return {
            type: 'ImportDeclaration',
            specifiers,
            source,
        };
    };

    static ifStatement(test, consequent, alternate) {
        return {
            type: "IfStatement",
            test,
            consequent,
            alternate,
        };
    };
}

module.exports = BaseAST;