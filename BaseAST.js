class BaseAST {
    static thisExpression() {
        return {
            type: 'ThisExpression',
        };
    };

    static awaitExpression(argument) {
        return {
            type: 'AwaitExpression',
            argument,
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

    static arrowFunctionExpression(params, body) {
        return {
            type: 'ArrowFunctionExpression',
            params,
            body,
        };
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

    static assignmentExpression(left, right, operator = '=') {
        return {
            type: 'AssignmentExpression',
            operator,
            left,
            right,
        };
    };

    static expressionStatement(expression) {
        return {
            type: 'ExpressionStatement',
            expression,
        };
    };

    static arrayExpression(elements) {
        return {
            type: 'ArrayExpression',
            elements,
        };
    };

    static identifier(name) {
        return {
            type: 'Identifier',
            name,
        }
    };

    static blockStatement(body) {
        return {
            type: 'BlockStatement',
            body,
        };
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

    static memberExpression(object, property) {
        return {
            type: 'MemberExpression',
            object,
            property,
        };
    };

    static callExpression(callee, args) {
        return {
            type: 'CallExpression',
            callee,
            arguments: args,
        };
    };

    static exportDefault(declaration) {
        return {
            type: 'ExportDefaultDeclaration',
            declaration,
        };
    };

    static module(body) {
        return {
            type: 'Program',
            body,
            sourceType: 'module',
        };
    };

    static ExportNamedDeclaration(declaration) {
        return {
            type: 'ExportNamedDeclaration',
            declaration,
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

    static variableDeclaration(name, kind, declarations) {
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
}

module.exports = BaseAST;