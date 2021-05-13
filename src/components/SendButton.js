import React from 'react';

import Button from '@material-ui/core/Button';

export default function SendButton() {

    return (
        <Button
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            color="secondary"
        >
            Войти
        </Button>
    )
};

