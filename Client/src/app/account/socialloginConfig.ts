import {AuthServiceConfig, GoogleLoginProvider} from 'angular-6-social-login';

export function getAuthServiceConfigs(): AuthServiceConfig {
    return new AuthServiceConfig(
        [
            {
                id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('719762341905-nsgda0ahgf2loco1mte1jrtbgpu5gg0d.apps.googleusercontent.com')
            }
        ]
    );
}
