const BaseAST = require('./BaseAST');

class CustomAST {
    static apiMethod(name, method, endpoint) {
        return BaseAST.makeProperty(
            BaseAST.identifier(name),
            BaseAST.functionExpression(
                [],
                BaseAST.blockStatement([
                    this.makeVariableDeclaration(
                        'json',
                        'const',
                        BaseAST.awaitExpression(
                            BaseAST.callExpression(
                                BaseAST.memberExpression(
                                    BaseAST.memberExpression(
                                        BaseAST.identifier('window'),
                                        BaseAST.identifier('axios'),
                                    ),
                                    BaseAST.identifier(method),
                                ),
                                [
                                    BaseAST.literal(endpoint),
                                ],
                            ),
                        ),
                    ),
                    BaseAST.returnStatement(
                        BaseAST.memberExpression(
                            BaseAST.identifier('json'),
                            BaseAST.identifier('data'),
                        ),
                    ),
                ]),
                true,
            ),
        );
    };

    static apiMethodCall(storage, apiModule, apiMethod) {
        return BaseAST.variableDeclaration(
            'const',
            [
                BaseAST.variableDeclarator(
                    BaseAST.identifier(storage),
                    BaseAST.awaitExpression(
                        BaseAST.callExpression(
                            BaseAST.memberExpression(
                                BaseAST.identifier(apiModule),
                                BaseAST.identifier(apiMethod),
                            ),
                            [],
                        ),
                    ),
                ),
            ],
        );
    };

    static vuexAction(name, body) {
        return BaseAST.exportNamedDeclaration(
            BaseAST.variableDeclaration(
                'const',
                [
                    BaseAST.variableDeclarator(
                        BaseAST.identifier(name),
                        BaseAST.arrowFunctionExpression(
                            [
                                BaseAST.objectPattern(
                                    [
                                        BaseAST.property(
                                            BaseAST.identifier('commit'),
                                            BaseAST.identifier('commit'),
                                            true
                                        ),
                                    ],
                                ),
                            ],
                            BaseAST.blockStatement(body),
                            true,
                        ),
                    ),
                ],
            ),
        );
    };

    static translation() {
        return BaseAST.objectExpression([
            BaseAST.property(
                BaseAST.identifier('translation'),
                BaseAST.objectExpression([]),
            ),
        ]);
    };

    static literalProperty(name, value) {
        return BaseAST.property(
            BaseAST.identifier(name),
            BaseAST.literal(value),
        );
    };
}

module.exports = CustomAST;